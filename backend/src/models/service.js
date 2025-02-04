'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    static associate(models) {
      Service.hasMany(models.Account, {foreignKey: 'service_id'});
    }
  }
  Service.init({
    service_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    api_id: DataTypes.INTEGER,
    name_service: DataTypes.STRING,
    url_service: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
    tableName: 'services',
    timestamps: false
  });
  return Service;
};