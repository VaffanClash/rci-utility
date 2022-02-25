const Discord = require('discord.js');
const client = new Discord.Client;

module.exports = {
    name: 'createreactionrole',
    args: true,
    usage: "<...>",
    async execute(message, args) {
        const channel = message.channel.id;

        args = message.content.split(/ +/);
        console.log(args[1]);

        const role = message.guild.roles.cache.find(role => role.name === args[1]);
        const emoji = args[2];

        const twitterNews = message.guild.roles.cache.find(role => role.name === 'Twitter News');
        const twitterNewsEmoji = '🐦';

        // const embed = new Discord.MessageEmbed()
        // .setColor('#e42643')
        // .setTitle('Scegli i tuoi ruoli')
        // .setDescription('Cliccando la reazione potrai venir taggato ogni qual volta ci sarà una specifica News!\n\n'
        // + `${newsEmoji} per essere informato dalle nostre News\n`
        // + `${twitterNewsEmoji} per essere informato ad ogni News di Twitter\n`);

        // message.channel.send(embed);

        const messageEmbed = await message.channel.send(embed);
        messageEmbed.react(newsEmoji);
        messageEmbed.react(twitterNewsEmoji);
    }
}