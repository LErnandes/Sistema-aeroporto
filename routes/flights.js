const express = require("express");
const router = express.Router();
const FlightsController = require("../controllers/FlightsController");

router.get("/", async (req, res) => {
  // #swagger.tags = ['Flights']
  FlightsController.getFlights(req, res);
});

router.post("/", async (req, res) => {
  // #swagger.tags = ['Flights']
  FlightsController.createFlights(req, res);
});

module.exports = router;
