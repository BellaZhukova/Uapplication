import { DataTypes } from "sequelize";

import sequelize from "../configs/db.js";

const Site = sequelize.define("Site", {
    site_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    counter_id: {
        type: DataTypes.INTEGER, 
        allowNull: false
    },
    name_site: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url_site: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: "site"
})

Site.associate = (models) => {
    // Каждый сайт принадлежит одному аккаунту
    Site.belongsTo(models.Account, { foreignKey: 'account_id' });
  };


export default Site;