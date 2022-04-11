// const Discord = require('discord.js');
// const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const reactionRoleFile = require("../commands/createReactionRole.js");

module.exports = {
  name: "messageReactionRemove",
  once: false,
  async execute(reaction, user, client, Discord) {
    if (user.bot) return;
    if (reaction.emoji.name === reactionRoleFile.reactionEmoji) {
      reaction.message.guild.members.cache.get(user.id).roles.remove(reactionRoleFile.role);
    }
  },
};
