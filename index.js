const { Client, GatewayIntentBits, Guild, Partials, Collection} = require('discord.js');
require('dotenv').config()

const {Guilds,GuildMembers,GuildMessages} = GatewayIntentBits;
const {User,Message,GuildMember,ThreadMember} = Partials;
const fs = require('node:fs');
const path = require('node:path');
const { deploy } = require('./deploy-commands')

const token = process.env.token

const client = new Client({
   intents: [Guilds, GuildMembers, GuildMessages, GatewayIntentBits.Guilds],
   partials: [User, Message, GuildMember, ThreadMember] 
  });

module.exports = { client };

client.events = new Collection();
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);

    client.events.set(event)
} // Getting events from events folder

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);

    client.commands.set(command.data.name, command);
} // Getting commands' data from commands folder 


client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;
	
	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
	await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});


client.once("ready", () => {
  console.log(`Logged in as ${client.user.username}`);
  client.user.setStatus('ONLINE');
  client.user.setActivity("/help | New to Discord 💕", "playing"); //new to Discord
  deploy()
})


client.login(token);
