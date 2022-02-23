const config = require('../config.json');

//* Banned words in the config can only be written in lowercase.

module.exports = {
  name: "message",
  once: false,
  execute(message) {
    if (message.author.bot) {
      return;
    }

    if (config.bannedWords.includes(message.content.toLowerCase())) {
      message.delete();
      return message.reply("evita di bestemmiare.");
    }
  },
};
