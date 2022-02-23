const config = require('../config.json');

module.exports = {
  name: "voiceStateUpdate",
  once: false,
  execute(oldState, newState, client, Discord) {

      //> JOIN CHANNEL
      if (oldState.channelID === null) {
        let embed = new Discord.MessageEmbed()
          .setColor("#008000")
          .setAuthor(
            newState.member.user.username,
            newState.member.user.displayAvatarURL()
          )
          .setTitle("Joined a Voice Channel")
          .setDescription(`<#${newState.channelID}>`)
          .setTimestamp();

        client.channels.cache.get(config.logchannel).send(embed);
      } else if (newState.channelID === null) {

      //> LEAVE CHANNEL
        let embed = new Discord.MessageEmbed()
          .setColor("#e6ad1e")
          .setAuthor(
            newState.member.user.username,
            newState.member.user.displayAvatarURL()
          )
          .setTitle("Left a Voice Channel")
          .setDescription(`<#${oldState.channelID}>`)
          .setTimestamp();

        client.channels.cache.get(config.logchannel).send(embed);
      }
  },
};
