'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Site extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Site.belongsTo(models.Account, { foreignKey: 'account_id' });
    }
  }
  Site.init({
    site_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    account_id: DataTypes.INTEGER,
    counter_id: DataTypes.INTEGER,
    name_site: DataTypes.STRING,
    url_site: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Site',
    tableName: 'sites',
    timestamps: false
  });
  return Site;
};