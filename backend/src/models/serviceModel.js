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

Service.create({
    service_id: "23",
    api_id: "1",
    name_service: "Яндекс Метрика",
    url_service: "metrika.yandex.ru"
})

export default Service;


