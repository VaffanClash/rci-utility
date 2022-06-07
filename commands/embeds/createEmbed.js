const Discord = require('discord.js');
const client = new Discord.Client;

module.exports = {
    name: 'createembed',
    args: true,
    usage: '<color> <title> <description>',
    execute(message, args) {
        args = message.content.split(/ +/);

        const color = args[1];

        const title = args[2];
        
        const description = args.slice(3, args.length).join(" ");
        const embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(title)
        .setDescription(description);
        message.channel.send(embed);

    }
}
