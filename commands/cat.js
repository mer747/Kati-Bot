const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
        data: new SlashCommandBuilder()
                    .setName('cat')
                    .setDescription('Show me those cute cats!'),
        async execute(interaction) {
                const res = await fetch("https://aws.random.cat/meow?ref=apilist.fun");
                const json = await res.json();
                const image = (json["file"]) // Getting photos from a web api
                const row = new ActionRowBuilder()
                .addComponents(
                        new ButtonBuilder()
                                .setCustomId("cat")
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
