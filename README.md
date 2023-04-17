# lemmy-translator-bot

This is a bot for [lemmy](https://github.com/LemmyNet/lemmy), the fediverse link aggregator. It translates posts and comments when mentioned.

# Setup

Clone the repository and install the dependencies with your choice of javascript package manager.

Create a file named `.env` in the same directory as `package.json`. There are 4 environent variables that need to be assigned in this file:

- `INSTANCE`: the instance the bot's account is on
- `USERNAME_OR_EMAIL`: username or email of the bot
- `PASSWORD`: password for the bot account
- `DEEPL_API_KEY`: API key required to use DeepL API. [This will require making an account with DeepL](https://www.deepl.com/pro-api?cta=header-pro-api/)

When the bot is setup, it can be started by running `npm start`.
