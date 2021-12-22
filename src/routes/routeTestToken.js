const express = require("express");
const Route = express.Router();
const ctlTestToken = require("./ctrlTestToken");
const auth = require("./auth");

Route.get("/", auth, ctlTestToken.testToken);

module.exports = Route;
