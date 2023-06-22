const db = require('../db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


class UserMethods {
    signUp(user, email){
        let sqlSearch = "SELECT * FROM Users WHERE email = ?";
        let sql = `INSERT into Users SET ?`;

        return new Promise((resolve, reject) => {
            db.query(sqlSearch, email, (err, results) => {
              let email = results[0];
      
              if (email === undefined) {
                  db.query(sql, user, (err, results) => {
                  try {
                    if (err) throw(err);
                    resolve(results);
                  } catch (error) {
                    reject(error);
                  }
                });
              } else if(email.email){
                return resolve(results);
              }
            });
          });
    }

    login(email, password){
        let sqlSearch = "SELECT * FROM Users WHERE email = ?";

        return new Promise((resolve, reject) => {
            db.query(sqlSearch, [email, password], async (err, results) => {
                if (results == 0) {
                    reject({ message: "Utilisateur introuvable !" });
                } else {
                    const valid = await bcrypt.compare(password, results[0].password);
                    if (!valid) {
                      reject({ message: "Paire identifiant/mot de passe incorrect" });
                    } else {
                      resolve({
                        UserId: results[0].id,
                        token: jwt.sign(
                          { UserId: results[0].id },
                          process.env.KEY,
                          { expiresIn: "2h" }
                        ),
                      });
                    }
                }
            })
        })
    }
}

module.exports = UserMethods;

