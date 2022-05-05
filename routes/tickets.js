const express = require("express");
const router = express.Router();
const TicketsController = require("../controllers/TicketsController");


router.get("/flight/:flightid", async (req, res) => {
  // #swagger.tags = ['Tickets']
  TicketsController.getTicketsByFlightId(req, res);
});

router.get("/customer/:customerid", async (req, res) => {
  // #swagger.tags = ['Tickets']
  TicketsController.getTicketsByCustomerId(req, res);
});

router.get("/:id", async (req, res) => {
  // #swagger.tags = ['Tickets']
  TicketsController.getTicketsById(req, res);
});

router.post("/", async (req, res) => {
  // #swagger.tags = ['Tickets']
  TicketsController.createTickets(req, res);
});

module.exports = router;
