const Discord = require('discord.js');
const client = new Discord.Client;

module.exports = {
    name: 'addfield',
    args: true,
    usage: '<embed you want to edit>, <name>, <value (description)>, <inline (true or false)>',
    execute(message, args) {
        args = message.content.split(/ +/);

        const str = message.content.split(',');

        const embedToEdit = str[0].slice(this.name.length + 1);
        console.log('embedToEdit: ', embedToEdit);

        const name = str[1];

        const value = str[2];
        
        const inline = str[3].trim();
        console.log('inline: ', inline);

        message.channel.messages.fetch(embedToEdit).then((msg) => {
            const embed = msg.embeds[0];
            const newEdit = new Discord.MessageEmbed(embed).addFields({name: name, value: value, inline: inline === 'true' ? true : false});
    
            msg.edit({ embed: newEdit }).catch(err => console.log(err));
            console.log(newEdit);
        });

    }
}

// { name: '!help', value: 'Shows this message.', inline: true }