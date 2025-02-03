'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ApiCall extends Model {
    static associate(models) {
      // define association here
    }
  }
  ApiCall.init({
    api_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    service_id: DataTypes.INTEGER,
    name_api: DataTypes.STRING,
    url_api: DataTypes.STRING,
    check_interval: DataTypes.STRING,
    param_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ApiCall',
    tableName: 'api_calls',
    timestamps: false
  });
  return ApiCall;
};