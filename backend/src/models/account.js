'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      Account.belongsTo(models.Service, {foreignKey: 'service_id'})
      Account.hasMany(models.Site, { foreignKey: 'account_id' });
    }
  }
  Account.init({
    account_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    service_id: DataTypes.INTEGER,
    login: DataTypes.STRING,
    token: DataTypes.STRING,
    site_id: DataTypes.ARRAY(DataTypes.INTEGER)
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts',
    timestamps: false
  });
  return Account;
};