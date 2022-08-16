const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('fox')
		.setDescription('Show me those wild foxies 🥰'),
	async execute(interaction) {
                const res = await fetch("https://randomfox.ca/floof/?ref=apilist.fun");
                const json = await res.json();
                const image = (json["image"]) // Getting photos from a web api

                const row = new ActionRowBuilder()
                .addComponents(
                        new ButtonBuilder()
                                .setCustomId("fox")
                                .setLabel("Another one!")
                                .setStyle(ButtonStyle.Success),
                );
                const embed = new EmbedBuilder()
                    .setImage(image)

                await interaction.reply({
                    embeds:[embed],
                    components:[row],
                });

                setTimeout(() => {
                        interaction.editReply({ embeds:[embed], components:[] })
                }, 10000) // Adding 10 seconds timeout to buttons then disappear.
	},
};