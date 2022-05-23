const { channel } = require("diagnostics_channel");
const fs = require("fs");

module.exports = {
  name: "editreactionrole",
  args: true,
  usage:
    "<ID of the message to edit> <new role> <new reaction> <field description>",
  execute(message, args) {
    const Discord = require("discord.js");
    const client = new Discord.Client();

    args = message.content.split(/ +/);
    const messageToEdit = args[1];
    console.log("messageToEdit: ", messageToEdit);

    const role = args[2];
    console.log("role: ", role);

    const reaction = args[3];
    console.log("reaction: ", reaction);

    const fieldDescription = args.slice(4, args.length).join(" ");
    console.log("fieldDescription: ", fieldDescription);

    message.channel.messages.fetch(messageToEdit).then((msg) => {
        const embed = msg.embeds[0];
        // console.log('embed: ', embed);
        const newEdit = new Discord.MessageEmbed(embed).addField(`${role}`, `${reaction} ${fieldDescription}`);
        // console.log('newEdit: ', newEdit);

        msg.edit({ embed: newEdit }).catch(err => console.log(err))
        msg.react(reaction);
    });

    fs.readFile('./reactionMessages.json', 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const parsedData = JSON.parse(data);
        const newData = parsedData.messages;
        // console.log(newData);

        const id = Math.floor(Math.random() * 10000);
        newData.push({ [id]: [messageToEdit, reaction, role] });

        console.log(newData);

      }
    })

  },
};
