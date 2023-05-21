const Plugin = require('../Database/Scemas/plugins');

class Functions {
    constructor() {
        
    }
    async checkPlugins(data = {name: "bot", guildId: "000000000000"}) {
        let plugin = data.name;

        let allowed = false;

        let dataConfig = await Plugin.findOne({
            where: { guildId: data.guildId }
        });

        if(!dataConfig) {
            dataConfig = await Plugin.create({guildId: data.guildId});
        }

        if(dataConfig.getDataValue("bot")) {
            switch(plugin) {
                case "fun":
                if(dataConfig.getDataValue("fun")) allowed = true
                break;
                case "misc":
                    if(dataConfig.getDataValue("misc")) allowed = true
                break;
            }
        } else {

        }

        return allowed;

        
    }
}

module.exports = Functions;