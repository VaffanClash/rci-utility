const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../../config.json');
const fs = require('fs');

module.exports = {
  name: "logchannel",
  args: true,
  usage: '<ID of the channel you want to use as log>',
  execute (message) {
    const args = message.content.split(/ +/);
    const id = args[1];

    //* check if the id is a number, if not return
    if (isNaN(id)) {
        message.reply('the specified ID is not a number!');
        return;
    };

    //* check if channel exists
    if (message.guild.channels.cache.get(id) === undefined) {
        message.channel.send('This channel does not exist!');
        return;
    }

    config.logchannel = id;

    fs.readFile('./config.json', 'utf8', (err, data) => {
        if (err) console.log(err);
        let newData = JSON.parse(data);
        newData.logchannel = id;
        
        const stringifiedData = JSON.stringify(newData);
        
        fs.writeFile('./config.json', stringifiedData, (err) => {
            if (err) console.log(err);
        })
    })

    message.channel.send(`<#${id}> is the new log channel!`);
  },
};