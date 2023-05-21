
const { RamApi, Utils } = require("ram-api.js");

class RamApiMain extends RamApi {
    constructor() {
        super(process.env.APIKEY, "v13");
    }

}

class RamApiUtils extends Utils {
    constructor() {
        super();
    }
}

module.exports = {
    RamApiMain,
    RamApiUtils
}