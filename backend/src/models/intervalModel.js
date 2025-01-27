import { DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const Interval = sequelize.define("Interval", {
    interval_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    api_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    site_id: {
        type: DataTypes.INTEGER,
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
}, {
    tableName: "interval"
})

export default Interval;