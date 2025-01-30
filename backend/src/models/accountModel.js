import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";
import Site from "./siteModel.js";

const Account = sequelize.define('Account', {
    account_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    service_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    site_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        allowNull: true
    }
}, 
{
    tableName: 'account',
});

Account.associate = (models) => {
    // Один аккаунт может иметь несколько сайтов
    Account.hasMany(models.Site, { foreignKey: 'account_id' });
  };

export default Account;