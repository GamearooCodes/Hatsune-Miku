const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
  CommandInteraction,
  EmbedBuilder,
} = require("discord.js");
const { RamApiMain } = require("../../src/ramApi");

module.exports = {
  name: "birthday",
  usage: "/fun birthday",
  description: "Get a Birthday wish from the bot",
  subcommand: "fun",
  perms: PermissionFlagsBits.SendMessages,
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    //console.log(1);
    let client = interaction.client;

    let data = await new RamApiMain().birthdayAsync();

    let embed = new EmbedBuilder()
      .setDescription(data.text)
      .setImage(data.url)
      .setColor("Random");

    interaction.reply({ embeds: [embed] });
  },
};
