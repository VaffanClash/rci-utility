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
          console.log('reaction added');

          newData = data.messages;
          for (const msg in newData) {
            const array = newData[msg][Object.keys(newData[msg])];

            if (reaction.partial) reaction.fetch(); // await
            if (reaction.message.id === array[0] && reaction.emoji.name === array[1]) {
              const role = reaction.message.guild.roles.cache.find((role) => role.name === array[2]);
              reaction.message.guild.members.cache.get(user.id).roles.add(role);
            }
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};
