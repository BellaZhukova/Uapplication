'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('api_calls', {
      api_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      service_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      name_api: {
        type: Sequelize.STRING,
        allowNull: false
      },
      url_api: {
        type: Sequelize.STRING,
        allowNull: false
      },
      check_interval: {
        type: Sequelize.STRING,
        allowNull: false
      },
      param_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('api_calls');
  }
};