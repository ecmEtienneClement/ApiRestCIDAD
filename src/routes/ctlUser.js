const user = require("../models/user");
const bcript = require("bcrypt");
const jwt = require("jsonwebtoken");

//METHODE POUR CREER UN NEW USER
//TODO
exports.creatUser = (req, res) => {
  bcript
    .hash(req.body.password, 10)
    .then((data_Hash_Password) => {
      const newUser = new user({
        email: req.body.email,
        password: data_Hash_Password,
      });
      newUser
        .save()
        .then(() => {
          res.status(201).json({ message: "new User creer ........success" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })

    .catch((error) => {
      res.status(500).json({ message: "hashage" });
    });
};
//METHODE POUR CONNECTER UN USER
//TODO
exports.connectUser = (req, res) => {
  user
    .findOne({ email: req.body.email })
    .then((data_User) => {
      if (!data_User) {
        return res.status(404).json({ error: "Utilisateur non trouver ..." });
      }
      bcript
        .compare(req.body.password, data_User.password)
        .then((valid) => {
          if (!valid) {
            return res
              .status(401)
              .json({ error: "mot de passe incorrect ..." });
          }
          res.status(200).json({
            userId: data_User._id,
            token: jwt.sign(
              { userId: data_User._id },
              process.env.SECRET_KEY_TOKEN,
              {
                expiresIn: "24h",
              }
            ),
          });
        })
        .catch((error) => {
          res.status(500).json({ error });
        });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
//METHODE POUR CHERCHER UN USER
//TODO
exports.getUser = (req, res) => {
  user
    .findOne({ email: req.params._email })
    .then((data_User) => {
      res.status(200).json(data_User);
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

//METHODE POUR MODIFIER LE MAIL
//TODO
exports.updateMailUser = (req, res) => {
  user
    .updateOne({ _id: req.params._id }, { ...req.body, _id: req.params._id })
    .then(() => {
      res.status(200).json({ message: "Mail user modifier ......success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};

//METHODE POUR MODIFIER LE MDP
//TODO
exports.updateMdpUser = (req, res) => {
  bcript
    .hash(req.body.password, 10)
    .then((data_Hash_Password) => {
      user
        .updateOne(
          { _id: req.params._id },
          {
            email: req.body.email,
            password: data_Hash_Password,
            _id: req.params._id,
          }
        )
        .then(() => {
          res.status(200).json({ message: "Mail user modifier ......success" });
        })
        .catch((error) => {
          res.status(400).json({ error });
        });
    })
    .catch((error) => {
      res.status(500).json({ message: "hashage Update Mdp" + error });
    });
};

//METHODE POUR SUPPRIMER LE USER
//TODO
exports.deleteUser = (req, res) => {
  user
    .deleteOne({ _id: req.params._id })
    .then(() => {
      res.status(200).json({ message: "user delete ......success" });
    })
    .catch((error) => {
      res.status(400).json({ error });
    });
};
