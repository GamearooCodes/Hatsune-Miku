const { Sequelize } = require("sequelize");

let db = {
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
}

class MYSQL extends Sequelize {
    constructor() {
        super(db.name, db.user, db.pass, {
            dialect: 'mariadb',
            logging: false,
            host: db.host,
            port: db.port,

        })
    }
}

module.exports = new MYSQL();