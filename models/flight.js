'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    leftTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    arrivedTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    startAirport: {
      type: DataTypes.STRING,
      allowNull: false
    },
    finalAirport: {
      type: DataTypes.STRING,
      allowNull: false
    },
    qty_seats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};