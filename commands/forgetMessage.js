const fs = require('fs');
const reactionMessages = require('../reactionMessages.json');

module.exports = {
    name: 'forgetmessage',
    args: true,
    usage: '<CONFIG ID of the message you want to forget>',
    execute(message) {
        // fs.readFile('./reactionMessages.json', 'utf8', (err, data) => {
        //     if (err) console.log(err);
        //     const args = message.content.split(/ +/);
        //     const parsedData = JSON.parse(data);
        //     const newData = parsedData.messages;
        //     console.log('newData: ', newData);
        //     const messageToForget = args[1];
        //     console.log('messageToForget: ', messageToForget);
        //     delete reactionMessages[messageToForget];

        //     message.reply('message deleted');
            
        // })

        const msg = reactionMessages.messages;
        // console.log('msg: ', msg);

        const args = message.content.split(/ +/);
        const messageToForget = args[1];

        for (const message of msg) {
            console.log(indexOf(message[messageToForget]));
            // console.log(message);
            delete message[messageToForget];

        }

    }
}
