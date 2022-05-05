'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seat.init({
    flight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customer: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};