const {
  Client,
  ApplicationCommandType,
  ApplicationCommandOptionType,
} = require("discord.js");
const { readdirSync } = require("fs");
const { HelperClient } = require("./helper");
const { PluginList } = require("../start");

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
  readdirSync("./Commands/").forEach((dir) => {
    const commands2 = readdirSync(`./Commands/${dir}/`).filter((f) =>
      f.endsWith(".js")
    );

    var commands = client.application.commands;

    for (let file of commands2) {
      let pull = require(`../Commands/${dir}/${file}`);

      //  console.log(pull.subcommand);

      client.runCommands.set(pull.name, pull);

      let { name } = pull;

      //  console.log(PluginList.toString());

      if (PluginList.includes(pull.subcommand)) {
      } else {
        PluginList.push(pull.subcommand);
      }

      new HelperClient("Hatsune Miku", client).executeconsole(
        "info",
        `Loaded ${name} to the command registry!`
      );
    }
  });
};
