const Discord = require('discord.js');
const { version } = require('../package.json');
const client = new Discord.Client;

module.exports = {
    name: 'help',
    execute(message) {
        const embed = new Discord.MessageEmbed()
        .setColor('#117fed')
        .setTitle("Bot's info and available commands")
        .addFields(
            { name: 'Commands:', value: '\u200B' },
            { name: '!help', value: 'Shows this message.', inline: true },
            { name: '!clear <number>', value: 'Deletes a given number of messages.', inline: true },

            { name: '\u200B', value: '\u200B'},

            { name: 'Events', value: '\u200B' },
            { name: 'Anti Bestemmie', value: 'Automatically detects profanity and deletes the message.', inline: true },
            { name: 'Message Delete', value: 'Automatically detects deleted messages and logs them.', inline: true },
            { name: 'VoiceStateUpdate', value: 'Logs who joins and leaves a Voice Channel.', inline: true }
        )
        .setFooter(`Bot version: ${version}`)
        // .setFooter({ text: `Bot version: ${version}`, iconURL: `${message.client.user.displayAvatarURL()}`}); //FIXME Throws error when trying to display the avatar.

        message.channel.send(embed);
    }
}