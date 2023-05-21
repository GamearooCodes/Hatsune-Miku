const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const Functions = require("../src/functions");

module.exports = {
    name: "fun",
    description: "fun commands",
    perms: PermissionFlagsBits.SendMessages,
    options: [
        {
            name: 'hello',
            description: "Get a hello from the bot or say hello to another member",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: 'member',
                    type: ApplicationCommandOptionType.User,
                    required: false,
                    description: "the member to say hello to"
                }
            ]
        }, 
        {
            name: "cuddle",
    description: "Cuddle a member",
    type: ApplicationCommandOptionType.Subcommand,
    options: [
        {
            name: 'member',
            type: ApplicationCommandOptionType.User,
            required: true,
            description: "the member to say hello to"
        }
    ],
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        console.log(await new Functions().checkPlugins({name: "fun", guildId: interaction.guild.id}))
        let commandName = interaction.options.getSubcommand();

        if(!commandName) return;

        let command = interaction.client.runCommands.get(commandName);

        console.log(command.name)

        if(!command) return ;



        command.execute(interaction);
        
    }}
