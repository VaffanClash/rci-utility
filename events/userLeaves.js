const Discord = require('discord.js');
const client = new Discord.Client;
const config = require('../config.json');

module.exports = {
    name: "guildMemberRemove",
    once: false,
    execute(member, client) {
        client.channels.cache.get(config.quitchannel).send(`${member} left the server`);
    }
}