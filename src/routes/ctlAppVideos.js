const appVideo = require("../models/appVideo");

//METHODE POUR CREER UN NEW APPVIDEOS...
//TODO
exports.creatNewAppVideo = (req, res) => {
  const newAppVideo = new appVideo({ ...req.body });
  newAppVideo
    .save()
    .then(() => {
      res.status(201).json({ message: "new newAppVideo crée ..... success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
//METHODE POUR RECUPERÉ TOUT LES APPVIDEOS...
//TODO
exports.getAllVideos = (req, res) => {
  appVideo
    .find()
    .then((data_AppVideo) => {
      res.status(200).json(data_AppVideo);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
//METHODE POUR MODIFIER LE APPVIDEOS...
//TODO
exports.updateVideo = (req, res) => {
  appVideo
    .updateOne({ _id: req.params._id }, { ...req.body, _id: req.params._id })
    .then(() => {
      res.status(200).json({ message: "AppVideo modifier ......success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

//METHODE POUR SUPPRIMER LE APPVIDEOS...
//TODO
exports.deleteVideo = (req, res) => {
  appVideo
    .deleteOne({ _id: req.params._id })
    .then(() => {
      res.status(200).json({ message: "AppVideo supprimer ......success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
//METHODE POUR SUPPRIMER TOUT  LES APPVIDEOS DU USER ...
//TODO
exports.deleteManyVideos = (req, res) => {
  appVideo
    .deleteMany({ userId: req.params._userId })
    .then(() => {
      res
        .status(200)
        .json({ message: "Tout vos AppVideo sont supprimer ......success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
