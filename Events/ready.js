const { Client, ActivityType } = require("discord.js");
const { RamApiMain, RamApiUtils } = require("../src/ramApi");
const { HelperClient } = require("../src/helper");
const mysql = require("../Database/login");
const plugin = require("../Database/Scemas/plugins");

module.exports = {
  name: "ready",
  once: true,
  /**
   *
   * @param {Client} client
   */
  async run(client) {
    require("../src/runCommands")(client);
    require("../src/commands")(client);

    let ramApi = new RamApiMain();
    let helperClient = new HelperClient("Hatsune Miku", client);

    helperClient.executeconsole("info", `${client.user.username} is online!`);

    mysql.authenticate().then(async () => {
      helperClient.executeconsole("info", "Connected To Database!");

      plugin.init(mysql);

      plugin.sync();

      helperClient.executeconsole("info", "Database Connection Completed!");
    });

    client.user.setPresence({
      activities: [
        {
          name: `/misc help | ${process.env.VERSION}`,
          type: ActivityType.Playing,
        },
      ],
    });
  },
};
