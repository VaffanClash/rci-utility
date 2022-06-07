const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: 'addreactionrole',
    args: true,
    usage: '<reactionRoleMessageId> <reaction> <role>',
    execute(message, args) {
        try {
            args = message.content.split(/ +/);

        const reactionRoleMessage = args[1]
        // console.log('reactionRoleMessage: ', reactionRoleMessage);

        const reaction = args[2];
        console.log('reaction: ', reaction);

        //> Selecting the role
        const role = message.guild.roles.cache.find((role) => role.name.replace(/\s/g, "") === args[3]);
      // \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
      // The role has to be inputted WITHOUT spaces, even if the real role DOES have spaces
        if (role === undefined) throw "this role does not exist.";
        console.log("role: ", role.name);

        message.channel.messages.fetch(reactionRoleMessage).then((msg) => {
            msg.react(reaction);
        });

        let reactionMessages = {
            messages: [],
        };

        fs.readFile("reactionMessages.json", (err, data) => {
            if (err) console.log(err);
    
            if (data == '') {
              console.log("Data not found. Writing for the first time!");
    
              const id = Math.floor(Math.random() * 10000);
              reactionMessages.messages.push({ [id]: [reactionRoleMessage, reaction, role.name] });
    
              const json = JSON.stringify(reactionMessages);
    
              fs.writeFile("reactionMessages.json", json, function (err) {
                if (err) console.log("Error: " + err);
              });
            } else {
              //> IF THE MESSAGE IS ALREADY FOUND
              console.log("Data found: skipping the first write");
    
              const parsedData = JSON.parse(data);
              console.log("parsedData: ", parsedData);
    
              reactionMessages = parsedData;
    
              // Sending data to JSON
              const id = Math.floor(Math.random() * 10000);
              // reactionMessages.messages.push({ [id]: [messageEmbed.id, reactionEmoji, role.name] });
              reactionMessages.messages.push({ [id]: [reactionRoleMessage, reaction, role.name] });
    
              console.log('reactionMessages: ', reactionMessages);
    
              const stringifiedData = JSON.stringify(reactionMessages);
    
              fs.writeFile("reactionMessages.json", stringifiedData, function (err) {
                  if (err) console.log("error", err);
                });
            }

          });
        } catch (error) {
            console.log(error);
        }
        
    }
}