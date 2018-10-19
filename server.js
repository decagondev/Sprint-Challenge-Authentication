const express = require("express");
const cors = require("cors");

const configureRoutes = require("./config/routes");

const server = express();
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

server.use(express.json());
server.use(cors(corsOptions));

configureRoutes(server);

module.exports = {
  server
};
