const crudService = require("./helpers/crudService");
const Flight = require("../models").Flight;
const seatService = require("../services/seatService");
const sequelize = require('sequelize');
const { Op } = require('sequelize')


async function getFlights() {
    const seatData = await seatService.getSeatsGroup(
      { customer: null }, 
      "flight", 
      ["flight", [sequelize.fn('COUNT', 'Seat.customer'), 'emptySeats']], 
      { emptySeats: { [Op.gt]: 0 } }
    );

    var flightids = seatData.map((seat) => {
      return seat.flight;
    });
    
    let flightData = await crudService.getAll(Flight, { id: flightids });

    return flightData;
}


async function getFlightsById(id) {
  let flightData = await crudService.getById(Flight, id);

  return flightData;
}


async function createFlights(data) {
  let flightData = await crudService.Create(data, Flight);
  await seatService.createSeatsByFlight(flightData.id, flightData.qty_seats);

  return flightData;
}

module.exports = {
  getFlights,
  createFlights,
  getFlightsById,
};
