const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
  CommandInteraction,
  EmbedBuilder,
} = require("discord.js");
const { RamApiMain } = require("../../src/ramApi");
const { HelperUtils } = require("../../src/helper");

module.exports = {
  name: "help",
  usage: "/misc help {plugin}",
  description: "Get the help cmd",
  subcommand: "misc",

  perms: PermissionFlagsBits.SendMessages,
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    let client = interaction.client;
    let helperUtil = new HelperUtils("Hatsune Miku");
  },
};
