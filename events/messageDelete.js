const config = require('../config.json');

module.exports = {
  name: "messageDelete",
  once: false,
  execute(messageDelete, client, Discord) {  
    let embed = new Discord.MessageEmbed()
      // .setColor("#e42643")
      .setColor("#c93e3e")
      .setAuthor(
        messageDelete.author.username,
        messageDelete.author.displayAvatarURL()
      )
      .setTitle("Deleted Message")
      .setDescription(messageDelete.content)
      .setTimestamp();

    client.channels.cache.get(config.logchannel).send(embed);
  },
};

// TODO check if the message got deleted from the author; if not, log it in the Embed
