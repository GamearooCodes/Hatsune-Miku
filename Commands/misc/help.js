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

    let subType = interaction.options.getString("plugin");

    //console.log(subType);

    if (!subType) subType = "misc";

    let embed = new EmbedBuilder()
      .setColor("Random")
      .setTitle(`Help Command`)
      .setThumbnail(client.user.avatarURL())
      .setFooter({ text: "[] Optional, {} required" });

    let commands = client.runCommands.filter((t) => t.subcommand === subType);

    let desc = commands.map(
      (m) =>
        `Command /${subType} ${m.name} - \`\`${m.usage}\`\`: ${m.description}`
    );

    embed.setDescription(desc.map((m) => m).join("\n"));

    interaction.reply({ embeds: [embed] });
  },
};
