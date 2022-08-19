const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dice')
		.setDescription('Throw a dice in the air'),
	async execute(interaction) {
		const diceemoji = "<:dice:1009367330565931019>"
        numbers = ["1","2","3","4","5","6"]
        const randomness = Math.floor(Math.random(numbers) * numbers.length)
		await interaction.reply({ content:`**${interaction.user.username}** _throws a dice in the air_ :sparkles:` });
        await interaction.editReply({ 
			content:`_${interaction.user.username} throws a dice in the air_ :sparkles:\nDice showed **${numbers[randomness]}** ${diceemoji}` })
	},
};
