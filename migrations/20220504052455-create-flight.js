'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leftTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      arrivedTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      startAirport: {
        type: Sequelize.STRING,
        allowNull: false
      },
      finalAirport: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qty_seats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};