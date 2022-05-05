const express = require("express");
const router = express.Router();
const CustomersController = require("../controllers/CustomersController");

router.post("/", async (req, res) => {
  // #swagger.tags = ['Customers']
  CustomersController.createCustomers(req, res);
});

module.exports = router;
