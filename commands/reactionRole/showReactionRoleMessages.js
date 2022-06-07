const fs = require('fs');

module.exports = {
    name: 'showreactionrolemessages',
    args: false,
    execute(message) {
        fs.readFile('./reactionMessages.json', 'utf8', (err, data) => {
            if (err) console.log(err);
            const parsedData = JSON.parse(data);
            const dataMessages = parsedData.messages;

            let str = '';
            for (let i = 0; i < dataMessages.length; i++) {
                str += JSON.stringify(dataMessages[i]) + '\n';
            }
            message.channel.send(str);
        })
    }
}