const { DataTypes, Model } = require("sequelize");

module.exports = class Plugin extends Model {
    static init(sequelize) {
        return super.init(
            {
                guildId: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                fun: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                },
                misc: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: true
                },
                bot: {
                    type: DataTypes.BOOLEAN,
                    defaultValue: true,
                }
            },
            {
                tableName: "Plugins",
                sequelize,
            })}}