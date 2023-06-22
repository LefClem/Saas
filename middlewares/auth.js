const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "Phudizhaduaiohuloh6786782GGYsugé§èS27TS8627");
    const userId = decodedToken.userId;
    req.auth = {
      id: userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }
};