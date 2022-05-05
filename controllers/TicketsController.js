const ticketService = require("../services/ticketService");


async function createTickets(req, res) {
  try {
    const { flight, seat, customer, buyDate } = req.body;
    let ticketData = await ticketService.createTickets(req.body);
    
    return res.json(ticketData);
  } catch (error) {
    console.error(error);
    res.send({ message: "Erro ao criar os tickets" });
  }
}


async function getTicketsById(req, res) {
  try {
    const { id } = req.params;
    let ticketData = await ticketService.getTicketsById(parseInt(id));
    
    return res.json(ticketData);
  } catch (error) {
    console.error(error);
    res.send({ message: "Erro ao encontrar os tickets" });
  }
}


async function getTicketsByFlightId(req, res) {
  try {
    const { flightid } = req.params;
    let ticketData = await ticketService.getTicketsByFlightId(parseInt(flightid));
    
    return res.json(ticketData);
  } catch (error) {
    console.error(error);
    res.send({ message: "Erro ao encontrar os tickets" });
  }
}


async function getTicketsByCustomerId(req, res) {
  try {
    const { customerid } = req.params;
    console.log(customerid)
    let ticketData = await ticketService.getTicketsByCustomerId(parseInt(customerid));
    
    return res.json(ticketData);
  } catch (error) {
    console.error(error);
    res.send({ message: "Erro ao encontrar os tickets" });
  }
}

module.exports = {
  createTickets,
  getTicketsByFlightId,
  getTicketsByCustomerId,
  getTicketsById,
};
