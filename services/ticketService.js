const crudService = require("./helpers/crudService");
const Ticket = require("../models").Ticket;
const Seat = require("../models").Seat;
const Flight = require("../models").Flight;
const { Sequelize } = require("sequelize");


async function getTicketsByFlightId(flightid) {
    const ticketData = await crudService.getOne(Ticket, { flight: flightid });

    return ticketData;
}


async function getTicketsByCustomerId(customerid) {
    const ticketData = await crudService.getOne(Ticket, { customer: customerid });

    return ticketData;
}


async function getTicketsById(id) {
    const ticketData = await crudService.getInner(Ticket, { id: id }, [{ 
        model: Flight,
        required: true
    }]);

    return ticketData;
}


async function createTickets(data) {
    const seat = await crudService.getAll(Seat, { number: data.seat });
    var ticketData;
    if (seat.customer == null) {
        await crudService.Update({ flight: data.flight, number: data.seat }, { customer: data.customer }, Seat);
        ticketData = await crudService.Create(data, Ticket);
        return ticketData;
    } else {
        return "Esse assento nao esta disponivel";
    }
}

module.exports = {
    createTickets,
    getTicketsByFlightId,
    getTicketsByCustomerId,
    getTicketsById,
};
