const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Tr_dn_inbound = sequelize.define('Tr_dn_inbound', {
        id:{ 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName:'tr_dn_inbound'
    });

    return Tr_dn_inbound;
}