const { EmbedBuilder } = require("@discordjs/builders");
const {
  CommandInteraction,
  ApplicationCommandOptionType,
  PermissionFlagsBits,
  AutoModerationActionType,
  AutoModerationRuleTriggerType,
  AutoModerationRuleKeywordPresetType,
} = require("discord.js");
const { RamApiMain } = require("../../src/ramApi");

module.exports = {
  name: "cuddle",
  usage: "/fun cuddle {member}",
  subcommand: "fun",
  description: "Cuddle a member",
  perms: PermissionFlagsBits.SendMessages,

  /**
   *
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    let member = interaction.options.getMember("member");

    let data = await new RamApiMain().cuddleAsync().catch((err) => {
      console.log(err);
    });

    if (!data) return interaction.reply("error");

    let embed = new EmbedBuilder()
      .setDescription(`${interaction.member} cuddles with ${member}`)
      .setImage(data.url);

    interaction.reply({ embeds: [embed] });
  },
};
