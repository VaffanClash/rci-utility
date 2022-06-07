const Discord = require('discord.js');
const { version } = require('../../package.json');
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

            { name: 'Embeds:', value: '\u200B' },
            { name: '!createEmbed <color> <title> <description>', value: 'Creates an embed', inline: true},
            { name: '!editTitle', value: 'Edits the title of a given embed', inline: true},
            { name: '!editDescription <id> <new description>', value: 'Edits the description of a given embed', inline: true},
            { name: '!addField <id>, <name>, <value (description)>, <inline (true or false)>', value: 'Adds a new field', inline: true },

            { name: '\u200B', value: '\u200B'},

            { name: 'Reaction Roles:', value: '\u200B' },
            { name: 'addReactionRole <reactionRoleMessageId> <reaction> <role>', value: 'adds a reaction role to a given message', inline: true},
            { name: 'showReactionRoleMessages', value: 'Shows all the messages listening for reaction roles', inline: true},

            { name: '\u200B', value: '\u200B'},
            { name: 'Config:', value: '\u200B' },
            { name: '!logchannel <id>', value: 'Changes the channel where the bot logs everything', inline: true },
            { name: '!quitchannel <id>', value: 'Changes the channel where the bot logs who leaves the server', inline: true },

            { name: '\u200B', value: '\u200B'},

            { name: 'Events', value: '\u200B' },
            { name: 'Anti Bestemmie', value: 'Automatically detects profanity and deletes the message', inline: true },
            { name: 'Message Delete', value: 'Automatically detects deleted messages and logs them', inline: true },
            { name: 'VoiceStateUpdate', value: 'Logs who joins and leaves a Voice Channel', inline: true },
            { name: 'userLeaves', value: 'Logs who leaves the server', inline: true },
        )
        .setFooter(`Bot version: ${version}`)

        message.channel.send(embed);
    }
}

// { name: '!createreactionrole <role> <reaction> <description>', value: 'Creates a reaction role message', inline: false },
// { name: '!editreactionrole <message id> <role> <reaction> <description>', value: 'Edits an already existing reaction role message (selected with the id)', inline: false },