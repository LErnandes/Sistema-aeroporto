const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./index.js"];

const doc = {
  host: "localhost:4000",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: "Flights",
      description: "Endpoints",
      path: '/flights'
    },
  ],
};

swaggerAutogen(outputFile, endpointsFiles, doc);
