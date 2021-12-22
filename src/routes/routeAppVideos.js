const express = require("express");
const Route = express.Router();
const ctlAppVideo = require("./ctlAppVideos");
const auth = require("./auth");

Route.post("/", auth, ctlAppVideo.creatNewAppVideo);
Route.put("/:_id", auth, ctlAppVideo.updateVideo);
Route.get("/", auth, ctlAppVideo.getAllVideos);
Route.delete("/:_id", auth, ctlAppVideo.deleteVideo);
Route.delete("/many/:_userId", auth, ctlAppVideo.deleteManyVideos);

module.exports = Route;
