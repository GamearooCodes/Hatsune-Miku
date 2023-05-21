require('dotenv').config();
const BotClient = require('./src/client');
const { RamApiMain } = require("./src/ramApi");

new RamApiMain().version_checkAsync();
new BotClient().start();