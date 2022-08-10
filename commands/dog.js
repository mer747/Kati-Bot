const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Woof Woof 🐕‍🦺'),
	async execute(interaction) {
                const res = await fetch("https://random.dog/woof.json?ref=apilist.fun");
                const json = await res.json();
                const image = (json["url"])

                function check() {
                    if(image.endsWith(".jpg")) {
                        newImage = image
                        return newImage
                    }
                }
                // pulling only jpg files

                const embed = new EmbedBuilder()
                        .setImage(check())

                await interaction.reply({
                        embeds:[embed]
                });
	},
};