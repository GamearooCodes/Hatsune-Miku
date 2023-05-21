require("dotenv").config();

const { BotClient } = require("./src/client");
const { RamApiMain } = require("./src/ramApi");
exports.PluginList = [];
new RamApiMain().version_checkAsync();
new BotClient().start();
