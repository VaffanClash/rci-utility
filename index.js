const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER'] })
const config = require('./config.json');
const fs = require('fs');

client.on('ready', () => {
    console.log('RCI | Utility is Online')
})

//> Event handler
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client, Discord));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client, Discord));
	}
}

//> Command Handler
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
  const  commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
};

client.on('message', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    message.reply('non hai i permessi per eseguire questo comando');
    return;
  };

  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) return;

  const command = client.commands.get(commandName);

  if (command.args && !args.length) {
    let reply = "You didn't provide any arguments."

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${config.prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  try {
    command.execute(message, args);
  } catch (err) {
    console.error(err);
    message.reply('there was an error trying to execute that command.')
  }
});

client.login(config.token)
