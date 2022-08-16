const { client } = require('../index.js')
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fetch = require('node-fetch');

client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	const string = interaction

	if (string.customId == "cat") {
		async function cat() {
				const res = await fetch("https://aws.random.cat/meow?ref=apilist.fun");
                const json = await res.json();
                const image = (json["file"]) // Getting photos from a web api
                let row = new ActionRowBuilder()
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
                    components:[row]
                })

				setTimeout(() => {
					interaction.editReply({ embeds:[embed], components:[] })
				}, 10000) // Adding 10 seconds timeout to buttons then disappear.
		}
		cat()
	}

	if (string.customId == "dog") {
		async function dog() {
			const res = await fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true");
        	const json = await res.json();
        	const image = json.toString() // Getting photos from a web api

			let row = new ActionRowBuilder()
			.addComponents(
					new ButtonBuilder()
							.setCustomId("dog")
							.setLabel("Another one!")
							.setStyle(ButtonStyle.Success),
			);

			const embed = new EmbedBuilder()
				.setImage(image)

			await interaction.reply({
				embeds:[embed],
				components:[row]
			})

			setTimeout(() => {
				interaction.editReply({ embeds:[embed], components:[] })
			}, 10000) // Adding 10 seconds timeout to buttons then disappear.
		}
		dog()
	}

	if (string.customId == "fox") {
		async function fox() {
			const res = await fetch("https://randomfox.ca/floof/?ref=apilist.fun");
			const json = await res.json();
			const image = (json["image"]) // Getting photos from a web api

			let row = new ActionRowBuilder()
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
				components:[row]
			})

			setTimeout(() => {
				interaction.editReply({ embeds:[embed], components:[] })
			}, 10000) // Adding 10 seconds timeout to buttons then disappear.
		}
		fox()
	}
});