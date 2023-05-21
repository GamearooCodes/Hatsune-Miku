const {
  Client,
  GatewayIntentBits,
  Partials,
  Collector,
  Collection,
  AutoModerationRuleEventType,
} = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");

class BotClient extends Client {
  constructor() {
    super({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
      ],

      partials: [Partials.User],
    });

    this.commands = new Collection();
    this.runCommands = new Collection();
  }
  async start() {
    const eventsPath = path.join(__dirname, "../Events");
    const eventsFiles = fs
      .readdirSync(eventsPath)
      .filter((file) => file.endsWith(".js"));

    for (const file of eventsFiles) {
      const filePath = path.join(eventsPath, file);

      const event = require(filePath);
      if (event.once) {
        this.once(event.name, (...args) => event.run(...args));
      } else {
        this.on(event.name, (...args) => event.run(...args));
      }
    }

    this.login(process.env.TOKEN);
  }
}

module.exports = { BotClient };
