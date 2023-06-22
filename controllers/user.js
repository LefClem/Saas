const bcrypt = require("bcrypt");
const UserModels = require("../dao/user.dao");
require("dotenv").config();

const userModels = new UserModels();

exports.signUp = async (req, res) => {
  try {
      let user = {
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10)
      };
    
      if (!user.first_name || !user.last_name || !user.email) {
        res.status(401).json({ message: "Remplissez les champs !" });
      }
      let response = await userModels.signUp(user, user.email);
    
      response.affectedRows == 1
        ? res.status(201).json({ message: "Utilisateur créé !" })
        : res.status(403).json({ message: "Email déjà utilisé !" });

  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }

};

exports.login = async (req, res) => {

    try {
        const response = await userModels.login(req.body.email, req.body.password);
        res.cookie("token", response.token, {
            httpOnly : true,
            path:"/"
        })
        res.status(200).json({ response });

    } catch (error) {
        switch (error.message) {
            case "Utilisateur introuvable !":
              res.status(404).json({ error });
              break;
      
            case "Paire identifiant/mot de passe incorrect":
              res.status(401).json({ error });
              break;
          }
    }
};
