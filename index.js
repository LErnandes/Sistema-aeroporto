require('dotenv').config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const swaggerFile = require("./swagger_output.json");

const flights = require("./routes/flights");
const customers = require("./routes/customers");
const tickets = require("./routes/tickets");

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());

app.use(express.json());

app.use(express.static("dist"));

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/flights", flights);
app.use("/customers", customers);
app.use("/tickets", tickets);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
