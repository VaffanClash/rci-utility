const Discord = require('discord.js');
const client = new Discord.Client;

module.exports = {
    name: 'edittitle',
    args: true,
    usage: '<embed you want to edit> <new title>',
    execute(message, args) {
        args = message.content.split(/ +/);

        const embedToEdit = args[1];

        const newTitle = args.slice(2, args.length).join(" ");

        message.channel.messages.fetch(embedToEdit).then((msg) => {
            const embed = msg.embeds[0];
            const newEdit = new Discord.MessageEmbed(embed).setTitle(newTitle);
    
            msg.edit({ embed: newEdit }).catch(err => console.log(err))
        });
    }
}