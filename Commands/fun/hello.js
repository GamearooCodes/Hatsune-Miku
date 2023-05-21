const { ApplicationCommandOptionType, PermissionFlagsBits, CommandInteraction, EmbedBuilder } = require("discord.js");
const { RamApiMain } = require("../../src/ramApi");

module.exports = {
    name: "hello",
    usage: "/fun hello",
    description: "Get a hello from the bot or say hello to another member",
    subcommand: "fun",
    perms: PermissionFlagsBits.SendMessages,
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        console.log(1)
        let client = interaction.client;

        let member = await interaction.options.getUser('member') || client.user;

        if(!member) member = client.user;

        let data = await new RamApiMain().helloAsync().catch(err => console.log(err));

        if(!data) return interaction.reply("Error");
        let embed = new EmbedBuilder();

        if(member.id !== client.user.id) {
            embed.setDescription(`${interaction.member} says hello to ${member}`).setImage("https://i.pinimg.com/originals/f6/8c/b1/f68cb1daaf8c191fa1e5ddb065aef7bd.gif");
        } else {
            embed.setDescription(data.text).setImage("https://i.pinimg.com/originals/f6/8c/b1/f68cb1daaf8c191fa1e5ddb065aef7bd.gif");

        }

        interaction.reply({embeds: [embed]});
    }

    
}