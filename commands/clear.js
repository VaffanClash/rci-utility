const Discord = require('discord.js');
const client = new Discord.Client;
const config = require('../config.json');

module.exports = {
  name: "clear",
  args: true,
  usage: "<number of messages you want to delete>",
  execute(message, args, client) {
    args = message.content.split(/ +/);

    const embed = new Discord.MessageEmbed()
      .setColor("#ff0000")
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL()
      )
      .setTitle("Deleted Bulk Messages")
      .setDescription(`${args[1]} messages has been eliminated.`)
      .addFields({
        name: "Deleted in:",
        value: `${message.channel}`,
      })
      .setTimestamp();

    message.channel.bulkDelete(+args[1] + 1);
    message.guild.channels.cache.get(config.logchannel).send(embed);
  },
};
