const {
  ApplicationCommandOptionType,
  PermissionFlagsBits,
  CommandInteraction,
  EmbedBuilder,
} = require("discord.js");
const { RamApiMain } = require("../../src/ramApi");
const { HelperUtils, HelperClient } = require("../../src/helper");

module.exports = {
  name: "8ball",
  usage: "/games 8ball {question}",
  description: "Get the help cmd",
  subcommand: "games",

  perms: PermissionFlagsBits.SendMessages,
  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    let client = interaction.client;
    let helperUtil = new HelperClient("Hatsune Miku", client);

    let question = interaction.options.getString("question");

    let data = await new RamApiMain()._8ballAsync().catch((err) => {
      helperUtil.executeconsole("error", err);
    });

    //console.log(data);

    if (data === undefined)
      return interaction.reply({ content: "Error", ephemeral: true });

    let answer = data.text;

    let embed = new EmbedBuilder()
      .setDescription(`Question: ${question} \n Answer: ${answer}`)
      .setColor("Random");

    interaction.reply({ embeds: [embed] });
  },
};
