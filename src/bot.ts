#!/usr/bin/env ts-node

import LemmyBot from 'lemmy-bot';
import { config } from 'dotenv';
import { signoffMap, translateTriggers } from './translationUtils';
import { Translator } from 'deepl-node';

config();

const { INSTANCE, USERNAME_OR_EMAIL, PASSWORD, DEEPL_API_KEY } =
  process.env as Record<string, string>;

const translator = new Translator(DEEPL_API_KEY);

console.log(PASSWORD);

const bot = new LemmyBot({
  instance: INSTANCE,
  credentials: {
    username: USERNAME_OR_EMAIL,
    password: PASSWORD,
  },
  dbFile: 'db.sqlite3',
  handlers: {
    async mention({
      mentionView: {
        comment: { path, content, post_id, id },
      },
      botActions: { createComment, getPost, getComment },
    }) {
      const languageCode = translateTriggers.find(({ trigger, language }) =>
        content
          .toLocaleLowerCase(language)
          .includes(trigger.toLocaleLowerCase(language))
      )?.language;

      if (!languageCode) {
        createComment({
          postId: post_id,
          parentId: id,
          content: 'Could not detect language to translate to',
        });
      } else if ((await translator.getUsage()).anyLimitReached()) {
        createComment({
          content:
            'Cannot translate: character limit for the month has been reached',
          postId: post_id,
          parentId: id,
        });
      } else {
        const pathList = path.split('.').filter((i) => i !== '0');

        if (pathList.length === 1) {
          const { post } = await getPost(post_id);
          const { text } = await translator.translateText(
            `${post.name}${post.body ? `\n\n${post.body}` : ''}`,
            null,
            languageCode
          );

          createComment({
            content: `${text}\n\n*${signoffMap.get(languageCode)}*`,
            postId: post_id,
            parentId: id,
          });
        } else {
          const parentId = Number(pathList[pathList.length - 2]);
          const parentComment = await getComment({
            id: parentId,
            postId: post_id,
          });

          const { text } = await translator.translateText(
            parentComment.comment.content,
            null,
            languageCode
          );

          createComment({
            content: `${text}\n\n*${signoffMap.get(languageCode)}*`,
            postId: post_id,
            parentId: id,
          });
        }
      }
    },
  },
});

bot.start();
