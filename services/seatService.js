const crudService = require("./helpers/crudService");
const Seat = require("../models").Seat;


async function createSeatsByFlight(flightId, qty_seats) {
    for (let number = 1; number <= qty_seats; number++) {
        await createSeats({ flight: flightId, number });
    }
}


async function createSeats(data) {
    const seatData = await crudService.Create(data, Seat);

    return seatData;
}


async function getSeatsById(id) {
    const seatData = await crudService.getById(Seat, id);

    return seatData;
}


async function getSeats(data) {
    const seatData = await crudService.getAll(Seat, data);

    return seatData;
}


async function getSeatsGroup(data, group, attributes, having) {
    const seatData = await crudService.getAllGroup(Seat, data, group, having, attributes);

    return seatData;
}

module.exports = {
    createSeats,
    getSeatsById,
    createSeatsByFlight,
    getSeats,
    getSeatsGroup,
};
