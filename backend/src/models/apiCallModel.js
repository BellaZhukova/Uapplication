import { DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const ApiCall = sequelize.define('ApiCall', {
    api_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name_api: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_api: {
        type: DataTypes.STRING,
        allowNull: false
    },
    check_interval: {
        type: DataTypes.STRING,
        allowNull: false
    },
    param_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: "api_call"
})

export default ApiCall;