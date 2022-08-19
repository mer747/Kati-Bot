const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Woof Woof 🐕'),
	async execute(interaction) {
        const res = await fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true");
        const json = await res.json();
        const image = json.toString() // Getting photos from a web api

        const row = new ActionRowBuilder()
                .addComponents(
                        new ButtonBuilder()
                                .setCustomId("dog")
                                .setLabel("Another one!")
                                .setStyle(ButtonStyle.Success),
                );
        const embed = new EmbedBuilder()
                .setImage(image)
                .setColor("Yellow")

        await interaction.reply({
            embeds:[embed],
            components:[row],
        });

        setTimeout(() => {
                interaction.editReply({ embeds:[embed], components:[] })
            }, 10000) // Adding 10 seconds timeout to buttons then disappear.
	}
}