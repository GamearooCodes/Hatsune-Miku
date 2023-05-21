const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "misc",
    description: "Misc commands",
    perms: PermissionFlagsBits.SendMessages,
    options: [
        {
            name: 'help',
            description: "Get the help command",
            type: ApplicationCommandOptionType.Subcommand,
            options: [],
            
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        let commandName = interaction.options.getSubcommand();

        if(!commandName) return;

        let command = interaction.client.runCommands.get(commandName);

        if(!command) return;

        command.execute(interaction);
        
    }}
