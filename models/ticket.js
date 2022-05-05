'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ticket.belongsTo(models.Flight, { foreignKey: 'flight' });
    }
  }
  Ticket.init({
    flight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    customer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    buyDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};