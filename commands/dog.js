const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Woof Woof 🐕'),
	async execute(interaction) {
        const res = await fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true");
        const json = await res.json();
        const image = json.toString()

        const embed = new EmbedBuilder()
                    .setImage(image)

        await interaction.reply({
                embeds:[embed],
            });

            


        }

                
	},
};