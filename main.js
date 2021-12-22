const http = require("http");
const express = require("express");
const myMongoose = require("mongoose");
const cors = require("cors");
const body_Parser = require("body-parser");
require("dotenv").config();

const routeUser = require("./src/routes/routeUser");
const routeAppVideo = require("./src/routes/routeAppVideos");
const routeAppPluging = require("./src/routes/routeAppPlugin");
const routeAppTestToken = require("./src/routes/routeTestToken");

const app = express();

//Connexion a mongodb
//TODO
myMongoose
  .connect(process.env.DONNEE_CONNEXION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
//Creation du server
//TODO
const server = http.createServer(app);

const accountSid = "AC335166d60b1f3784b66f7f2972f02211";
const authToken = "3be5e5d0a992576b6eeff46c88d821bb";
const client = require("twilio")(accountSid, authToken);
/*client
  .keys("SKfa2b5847cb75cc8973f9d2222b52ac97")
  .fetch()
  .then((key) => console.log(key.friendlyName));
client.newKeys
  .create({ friendlyName: "ecmCIDAD" })
  .then((new_key) => console.log(new_key.sid));
*/
client.messages
  .create({
    from: "whatsapp:+14155238886",
    body: "Hello there!",
    to: "whatsapp:+221773937698",
  })
  .catch((error) => {
    console.log(error);
  })
  .then((message) =>
    console.log("le message:" + message.to + " " + message.sid)
  );

//...................Traitement des requettes................................
app.use(cors({ origin: process.env.ORIGIN }));
app.use(body_Parser.json());

app.use("/user/", routeUser);
app.use("/app/video/", routeAppVideo);
app.use("/app/plugin/", routeAppPluging);
app.use("/app/testToken/", routeAppTestToken);

//...................................SERVER......................................
server.listen(process.env.PORT, () => {
  console.log("server started at port " + process.env.PORT);
});
