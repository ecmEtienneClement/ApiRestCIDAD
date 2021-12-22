const mongoose = require("mongoose");
const shemaModelAppVideo = mongoose.Schema({
  userId: { type: String, require: true },
  cour: { type: String, require: true },
  titre: { type: String, require: true },
  url: { type: String, require: true },
  signaler: { type: new Array(String), require: true },
  viewUser: { type: new Array(String), require: true },
  date: { type: String, require: true },
});
module.exports = mongoose.model("appVideo", shemaModelAppVideo);
