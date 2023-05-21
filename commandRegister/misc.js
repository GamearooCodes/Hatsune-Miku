const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
} = require("discord.js");
const { PluginList } = require("../start");

let hi = [];

for (let plugin of PluginList) {
  // add a option like hi.plugin = plugin replace bot plugin with the value of plugin
  hi.push({ name: plugin, value: plugin });
}

module.exports = {
  name: "misc",
  description: "Misc commands",
  perms: PermissionFlagsBits.SendMessages,
  options: [
    {
      name: "help",
      description: "Get the help command",
      type: ApplicationCommandOptionType.Subcommand,
      options: [
        {
          name: "plugin",
          description: "the plugin to get the commands of",
          type: ApplicationCommandOptionType.String,
          required: true,
          choices: hi,
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
