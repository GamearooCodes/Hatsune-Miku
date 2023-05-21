const { Client, ApplicationCommandType, ApplicationCommandOptionType } = require("discord.js");
const { readdirSync } = require("fs");
const { HelperClient } = require("./helper");

/**
 * 
 * @param {Client} client 
 */
module.exports = async (client) => {
    
        const commands2 = readdirSync(`./commandRegister/`).filter(f => f.endsWith(".js"))

        var commands = client.application.commands;

        for (let file of commands2) {
            let pull = require(`../commandRegister/${file}`);

            client.commands.set(pull.name, pull);

            

            let {name, description, options, perms} = pull;

            

            

                commands?.create({
                    name,
                    description,
                    options,
                    default_member_permissions: perms,
                })

            new HelperClient("Command Handler", client).executeconsole("info", `Loaded /${name}'s commands to the bot`);
            }
            
        
  
}