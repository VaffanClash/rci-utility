const fs = require('fs');

module.exports = {
  name: "messageReactionAdd",
  once: false,
  async execute(reaction, user, message, client, Discord) {
    try {
      fs.readFile("reactionMessages.json", async (err, data) => {
        if (err) {
          console.log(err);
        } else {
          if (user.bot) return;
          data = JSON.parse(data);
          if (reaction.partial) await reaction.fetch();
          if (reaction.message.id === data.messages[0] && reaction.emoji.name === data.messages[1]) {
            const role = reaction.message.guild.roles.cache.find(role => role.name === data.messages[2]);
            reaction.message.guild.members.cache.get(user.id).roles.add(role);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};
