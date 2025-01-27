import { DataTypes } from "sequelize";
import sequelize from "../configs/db.js";
import Account from "./accountModel.js";

const Service = sequelize.define('Service', {
    service_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    api_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name_service: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_service: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, 
{
    tableName: 'service',
    timestamps: false
});

export default Service;


