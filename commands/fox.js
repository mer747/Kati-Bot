const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('fox')
		.setDescription('Show me those wild foxies 🥰'),
	async execute(interaction) {
                const res = await fetch("https://randomfox.ca/floof/?ref=apilist.fun");
                const json = await res.json();
                const image = (json["image"])

                const embed = new EmbedBuilder()
                        .setImage(image)

                await interaction.reply({
                        embeds:[embed]
                });
	},
};