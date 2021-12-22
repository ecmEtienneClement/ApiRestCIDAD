const appPlugins = require("../models/appPlugins");

//METHODE POUR CREER UN NEW APPPLUGIN...
//TODO
exports.creatNewAppPlugin = (req, res) => {
  const newAppPlugin = new appPlugins({ ...req.body });

  newAppPlugin
    .save()
    .then(() => {
      res.status(201).json({ message: "new appPlugin crée ..... success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
//METHODE POUR RECUPERÉ TOUT LES APPPLUGINS...
//TODO
exports.getAllPlugin = (req, res) => {
  appPlugins
    .find()
    .then((data_AppPlugin) => {
      res.status(200).json(data_AppPlugin);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
//METHODE POUR RECUPERÉ UN APPPLUGINS ...
//TODO
exports.getDetailsPlugin = (req, res) => {
  appPlugins
    .findOne({ _id: req.params._id })
    .then((data_AppPlugin) => {
      if (!data_AppPlugin) {
        return res.status(404).json({ error: "Plugin non trouver ..." });
      }
      res.status(200).json(data_AppPlugin);
    })
    .catch(() => {
      res.status(400).json({ error: "error de getDetail" });
    });
};
//METHODE POUR MODIFIER LE APPPLUGINS ...
//TODO
exports.updatePlugin = (req, res) => {
  appPlugins
    .updateOne({ _id: req.params._id }, { ...req.body, _id: req.params._id })
    .then(() => {
      res.status(200).json({ message: "AppPluging modifier ......success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
//METHODE POUR SUPPRIMER LE APPPLUGINS ...
//TODO
exports.deletePlugin = (req, res) => {
  appPlugins
    .deleteOne({ _id: req.params._id })
    .then(() => {
      res.status(200).json({ message: "AppPluging supprimer ......success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
//METHODE POUR SUPPRIMER TOUT  LES APPPLUGINS DU USER ...
//TODO
exports.deleteManyPlugin = (req, res) => {
  appPlugins
    .deleteMany({ userId: req.params._userId })
    .then(() => {
      res
        .status(200)
        .json({ message: "Tout vos AppPluging sont supprimer ......success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
