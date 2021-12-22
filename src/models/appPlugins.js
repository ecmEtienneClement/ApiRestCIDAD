const mongoose = require("mongoose");
const shemaModelAppPlugins = mongoose.Schema({
  language: { type: String, require: true },
  documentation: { type: String, require: true },
  code: { type: String, require: true },
  tbCommentaire: {
    type: [
      {
        commentaire: String,
        Id_User: String,
        nomUser: String,
        prenomUser: String,
        promoUser: String,
        dateCommentaire: String,
      },
    ],
    require: true,
  },
  userId: { type: String, require: true },
  date: { type: String, require: true },
  update: { type: Number, require: true },
  tbViewUser: { type: new Array(String), require: true },
  tbSignalCommentaire: { type: new Array(String), require: true },
  tbViewCommentaire: { type: new Array(String), require: true },
});
module.exports = mongoose.model("appPlugins", shemaModelAppPlugins);
