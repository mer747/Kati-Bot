const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Show me those cute cats!'),
	async execute(interaction) {
                const res = await fetch("https://aws.random.cat/meow?ref=apilist.fun");
                const json = await res.json();
                const image = (json["file"])

                const embed = new EmbedBuilder()
                        .setImage(image)

                await interaction.reply({
                        embeds:[embed]
                        
                });
	},
};
