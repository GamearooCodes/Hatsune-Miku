const {
  Interaction,
  PermissionsBitField,
  PermissionFlagsBits,
  ChannelType,
  EmbedBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRow,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const { options } = require("../Commands/fun/hello");

module.exports = {
  name: "interactionCreate",
  once: false,
  /**
   *
   * @param {Interaction} interaction
   */
  async run(interaction) {
    const client = interaction.client;

    const { commandName, options } = interaction;
    if (!interaction.isCommand()) return null;

    let cmd = options.getSubcommand();

    cmd = commandName;

    let command = client.commands.get(cmd);

    if (!command) {
      interaction.reply(`${cmd} Was removed!`);
      commands.delete(interaction.commandId).then((cmd) => {});
      return;
    }

    command.execute(interaction);
  },
};
