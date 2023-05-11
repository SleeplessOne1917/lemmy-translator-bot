import LemmyBot, { CommentView, PostView } from 'lemmy-bot';
import { config } from 'dotenv';
import { limitMap, signoffMap, translateTriggers } from './translationUtils';
import { Translator } from 'deepl-node';

config();

const { INSTANCE, USERNAME_OR_EMAIL, PASSWORD, DEEPL_API_KEY } =
  process.env as Record<string, string>;

const translator = new Translator(DEEPL_API_KEY);

const shouldSpoiler = (text: string) =>
  text.length > 50 && !/:::\s+spoiler/.test(text);

const spoilerify = (text: string) => `::: spoiler Translation\n${text}\n:::`;

const bot = new LemmyBot({
  instance: INSTANCE,
  credentials: {
    username: USERNAME_OR_EMAIL,
    password: PASSWORD,
  },
  connection: {
    secondsBetweenPolls: 30,
  },
  federation: 'all',
  dbFile: 'db.sqlite3',
  handlers: {
    async mention({
      mentionView: { comment },
      botActions: { createComment, getParentOfComment },
    }) {
      const languageCode = translateTriggers.find(({ trigger, language }) =>
        comment.content
          .toLocaleLowerCase(language)
          .includes(trigger.toLocaleLowerCase(language))
      )?.language;

      if (!languageCode) {
        createComment({
          postId: comment.post_id,
          parentId: comment.id,
          content: 'Could not detect language to translate to',
        });
      } else if ((await translator.getUsage()).anyLimitReached()) {
        createComment({
          content: limitMap.get(languageCode)!,
          postId: comment.post_id,
          parentId: comment.id,
        });
      } else {
        const { type, data } = await getParentOfComment(comment);

        if (type === 'post') {
          const { post } = data as PostView;
          const { text } = await translator.translateText(
            `# ${post.name}${
              post.body
                ? `\n\n${
                    shouldSpoiler(post.body) ? spoilerify(post.body) : post.body
                  }`
                : ''
            }`,
            null,
            languageCode
          );

          createComment({
            content: `${text}\n\n*${signoffMap.get(languageCode)}*`,
            postId: comment.post_id,
            parentId: comment.id,
          });
        } else {
          const {
            comment: { content: parentContent },
          } = data as CommentView;

          const { text } = await translator.translateText(
            shouldSpoiler(parentContent)
              ? spoilerify(parentContent)
              : parentContent,
            null,
            languageCode
          );

          createComment({
            content: `${text}\n\n*${signoffMap.get(languageCode)}*`,
            postId: comment.post_id,
            parentId: comment.id,
          });
        }
      }
    },
  },
});

bot.start();
