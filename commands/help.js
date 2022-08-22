const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle  } = require('discord.js');
const { client } = require('../index.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('See all commands'),
	async execute(interaction) {

		const patreonemoji = "<:patreon:1009837393609773088>"
		const topggemoji = "<:topgg:1009844755858989219>"

		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setLabel("Vote Us")
					.setEmoji(topggemoji)
					.setURL("https://top.gg/en/bot/1006131299402121250")
					.setStyle(ButtonStyle.Link),

				new ButtonBuilder()
					.setLabel("Support Us ")
					.setEmoji(patreonemoji)
					.setURL("https://www.patreon.com/kati_bot")
					.setStyle(ButtonStyle.Link),
			)

        const embed = new EmbedBuilder()
            .setTitle("Kati Commands")
            .setThumbnail("https://cdn.discordapp.com/attachments/780465945889603608/1009441441593970820/Kati.png")
			.setColor("Yellow")
			.setFields([{ name:"Commands", value:"**/cat** Cat photos for believers\n**/dog** Dog photos for dog lovers\n**/fox** Foxies for those like wild stuff" }, { name:"Extra Commands", value:"**/coin** throw a coin in the air and see your luck\n**/dice** Some dicey games" }])
            .setDescription("Kati is an entertainment bot with animal commands. Kati is still improving. As the time goes on there will be more fun commands launching into orbit. Here are some of the commands you can use:")

		await interaction.reply({ embeds:[embed], components:[row] });
	},
};