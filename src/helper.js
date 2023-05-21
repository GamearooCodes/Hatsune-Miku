const { Client, Utils } = require("discord-helper.js");

class HelperClient extends Client {
    constructor(name, client) {
        super(name, client);
    }
}

class HelperUtils extends Utils {
    constructor(name) {
        super(name)
    }
}

module.exports = {HelperClient, HelperUtils};