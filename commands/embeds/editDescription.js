const Discord = require('discord.js');
const client = new Discord.Client;

module.exports = {
    name: 'editdescription',
    args: true,
    usage: '<id> <new description>',
    execute(message, args) {
        args = message.content.split(/ +/);

        const embedToEdit = args[1];

        const newDescription = args.slice(2, args.length).join(" ");

        message.channel.messages.fetch(embedToEdit).then((msg) => {
            const embed = msg.embeds[0];
            const newEdit = new Discord.MessageEmbed(embed).setDescription(newDescription);
    
            msg.edit({ embed: newEdit }).catch(err => console.log(err))
        });
    }
}