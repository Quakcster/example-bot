//DONT TOUCH THIS
import { SlashCommandBuilder } from '@discordjs/builders';

// But A Name And Descriiption For The Command Inbetween The '' So That The Bot Can Add It As A Comand
async function create() {
	const command = new SlashCommandBuilder()
		.setName('NAME OF COMMAND HERE')
		.setDescription('DESCRIPTION OF YOUR COMMAND HERE');
	return command.toJSON();
}

// ONLY EDIT THE CONTENT CHANGE THE <SET MESSAGE CONTENT> AND LEAVE QUOTE MARKS
async function invoke(interaction) {
	const user = interaction.options.getUser('user');

	if (user != null) {
		interaction.reply({ content: `` }); //LEAVE THE CONTENT BLANK
	} else {
		interaction.reply({
			content: 'YOUR REPLY/ACTION HERE',
			ephemeral: true,
		});
	}
}

export { create, invoke };