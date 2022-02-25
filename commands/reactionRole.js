const Discord = require('discord.js');
const client = new Discord.Client;

module.exports = {
    name: 'reactionrole',
    async execute(message) {
        const channel = message.channel.id;

        const news = message.guild.roles.cache.find(role => role.name === 'News');
        const newsEmoji = '📰';

        const twitterNews = message.guild.roles.cache.find(role => role.name === 'Twitter News');
        const twitterNewsEmoji = '🐦';

        const embed = new Discord.MessageEmbed()
        .setColor('#e42643')
        .setTitle('Scegli i tuoi ruoli')
        .setDescription('Cliccando la reazione potrai venir taggato ogni qual volta ci sarà una specifica News!\n\n'
        + `${newsEmoji} per essere informato dalle nostre News\n`
        + `${twitterNewsEmoji} per essere informato ad ogni News di Twitter\n`);

        // message.channel.send(embed);

        const messageEmbed = await message.channel.send(embed);
        messageEmbed.react(newsEmoji);
        messageEmbed.react(twitterNewsEmoji);
    }
}