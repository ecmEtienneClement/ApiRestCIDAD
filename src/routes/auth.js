const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify_Token = jwt.verify(token, process.env.SECRET_KEY_TOKEN);
    const userId = verify_Token.userId;
    if (req.body.userIdTK && req.body.userIdTK !== userId) {
      throw "Erreur d'identifiant";
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: "Requête non autorisée ! Veillez générer un nouveau token",
    });
  }
};
