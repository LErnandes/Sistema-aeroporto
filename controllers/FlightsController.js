const flightService = require("../services/flightService");


async function getFlights(req, res) {
  try {
    let flightData = await flightService.getFlights();
    
    return res.json(flightData);
  } catch (error) {
    console.error(error);
    res.send({ message: "Erro ao encontrar os flights" });
  }
}

async function createFlights(req, res) {
  try {
    const { leftTime, arrivedTime, startAirport, finalAirport, qty_seats, price } = req.body;
    let flightData = await flightService.createFlights(req.body);
    
    return res.json(flightData);
  } catch (error) {
    console.error(error);
    res.send({ message: "Erro ao criar os flights" });
  }
}

module.exports = {
  getFlights,
  createFlights,
};
