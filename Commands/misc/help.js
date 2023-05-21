const { ApplicationCommandOptionType, PermissionFlagsBits, CommandInteraction, EmbedBuilder } = require("discord.js");
const { RamApiMain } = require("../../src/ramApi");
const { HelperUtils } = require("../../src/helper");

module.exports = {
    name: "help",
    usage: "/misc help",
    description: "Get the help cmd",
    subcommand: "fun",
    perms: PermissionFlagsBits.SendMessages,
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        let helperUtil = new HelperUtils("Hatsune Miku");

       let subType = interaction.options.getString("sub");




    }

    
}