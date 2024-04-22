const fs = require('fs');
const reactionMessages = require('../../reactionMessages.json');

module.exports = {
    name: 'forgetmessage',
    args: true,
    usage: '<ID of the message you want to forget>',
    execute(message) {
        const args = message.content.split(/ +/);
        const messageToForget = Number(args[1]);

        // if (reactionMessages.messages === '') return;
        // TODO: add guard clause

        reactionMessages.messages.splice(messageToForget, 1);
        message.reply('message deleted');

        const json = JSON.stringify(reactionMessages);
        
        fs.writeFile("reactionMessages.json", json, function (err) {
            if (err) console.log("Error: " + err);
        });

    }
}
