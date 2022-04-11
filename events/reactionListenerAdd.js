// const Discord = require('discord.js');
// const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const reactionRoleFile = require("../commands/createReactionRole.js");

module.exports = {
  name: "messageReactionAdd",
  once: false,
  async execute(reaction, user, client, Discord) {
    console.log('reaction found');
    // if (message.id === ''); // pass the message
    if (user.bot) return;
    if (reaction.emoji.name === reactionRoleFile.reactionEmoji) {
      reaction.message.guild.members.cache.get(user.id).roles.add(reactionRoleFile.role);
    }
  },
};
