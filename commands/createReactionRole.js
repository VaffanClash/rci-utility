const fs = require('fs');

module.exports = {
  name: "createreactionrole",
  args: true,
  usage: "<role> <icon> <description>",
  async execute(message, args) {
    const Discord = require("discord.js");
    const client = new Discord.Client();

    try {
      const channel = message.channel.id;
      args = message.content.split(/ +/);

      //> Selecting the role
      const role = message.guild.roles.cache.find(
        (role) => role.name.replace(/\s/g, "") === args[1]
      );
      // \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces).
      // The role has to be inputted WITHOUT spaces, even if the real role DOES have spaces
      module.exports.role = role;
      if (role === undefined) throw "this role does not exist.";
      console.log("role: ", role.name);

      //> Selecting the emoji
      if (args[2] === undefined)
        throw "you didn't provide the second argument.";
      // if (args[2].length > 1) throw "the second argument has to be an emoji.";
      // there is actually no check to see if the emoji is a valid one
      const reactionEmoji = args[2];
      module.exports.reactionEmoji = reactionEmoji;
      console.log("reactionEmoji: ", reactionEmoji);

      //> Selecting the description
      const description = args.slice(3, args.length).join(" ");
      console.log("description: ", description);

      //> Creating the embed
      const embed = new Discord.MessageEmbed()
        .setColor("#2271B3")
        .setTitle("Seleziona i tuoi ruoli")
        .setDescription(`${reactionEmoji} ${description}`);

      const messageEmbed = await message.channel.send(embed);
      messageEmbed.react(reactionEmoji);

      /**----------------------
       *     MESSAGES IDs
       *------------------------**/

      let reactionMessages = {
        messages: [],
      };

      //! The name sent to the json file is the name of the first role choosed for the reaction message

      fs.readFile("reactionMessages.json", (err, data) => {
        if (err) console.log(err);

        if (data == "") {
          console.log("Data not found. Writing for the first time!");

          //> Sending data to JSON
          // reactionMessages.messages.push({ [role.name]: messageEmbed.id });
          // reactionMessages.messages.push(messageEmbed.id);
          reactionMessages.messages.push(messageEmbed.id, reactionEmoji, role.name);

          const json = JSON.stringify(reactionMessages);

          fs.writeFile("reactionMessages.json", json, function (err) {
            if (err) console.log("Error: " + err);
          });
        } else {
          console.log("Data found: skipping the first write");

          const parsedData = JSON.parse(data);
          console.log("parsedData: ", parsedData);

          //> Sending data to JSON
          // parsedData.messages.push({ [role.name]: messageEmbed.id });
          // parsedData.messages.push(messageEmbed.id);
          reactionMessages.messages.push(messageEmbed.id, reactionEmoji, role.name);

          const stringifiedData = JSON.stringify(parsedData);

          fs.writeFile(
            "reactionMessages.json",
            stringifiedData,
            function (err) {
              if (err) console.log("error", err);
            }
          );
        }
      });

    } catch (error) {
      message.reply(error);
      console.error(error);
    };
    
  },
};
