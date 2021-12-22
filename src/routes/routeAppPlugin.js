const express = require("express");
const Route = express.Router();
const ctlAppPlugin = require("./ctlAppPlugins");
const auth = require("./auth");
Route.post("/", auth, ctlAppPlugin.creatNewAppPlugin);
Route.put("/:_id", auth, ctlAppPlugin.updatePlugin);
Route.get("/", auth, ctlAppPlugin.getAllPlugin);
Route.get("/details/:_id", auth, ctlAppPlugin.getDetailsPlugin);
Route.delete("/:_id", auth, ctlAppPlugin.deletePlugin);
Route.delete("/many/:_userId", auth, ctlAppPlugin.deleteManyPlugin);

module.exports = Route;
