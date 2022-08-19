const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coin')
		.setDescription('Coin of faith decides your destiny'),
	async execute(interaction) {
		const coinemoji = "<:coin_flip:1009362954229137473>"
        sides = ["heads", "tails"]
        const randomness = Math.floor(Math.random(sides) * sides.length)
		await interaction.reply({ content:`${interaction.user.username} _flips the coin_ ${coinemoji}` });
        await interaction.editReply({ 
			content:`${interaction.user.username} _flips the coin_ ${coinemoji}\nCoin landed on **${sides[randomness]}**` })
	},
};
