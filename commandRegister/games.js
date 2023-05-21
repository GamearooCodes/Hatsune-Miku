const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");
const { PluginList } = require("../start");

module.exports = {
  name: "games",
  description: "Games commands",
  perms: PermissionFlagsBits.SendMessages,
  options: [
    {
      name: "8ball",
      description: "Ask te bot a question",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "question",
          description: "the question to ask the bot",
          type: ApplicationCommandOptionType.String,
          required: true,
        },
      ],
    },
  ],
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    let commandName = interaction.options.getSubcommand();

    if (!commandName) return;

    let command = interaction.client.runCommands.get(commandName);

    if (!command) return;

    command.execute(interaction);
  },
};
