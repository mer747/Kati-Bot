const fs = require('node:fs');
const path = require('node:path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
require("dotenv").config()

const commands = [].map(command => command.toJSON());
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith('.js'));

const token = process.env.token
const guildId = process.env.guildId
const clientId = process.env.clientId

const rest = new REST({ version: '10' }).setToken(token);

function deploy() {
	for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);

}

module.exports = {deploy}
