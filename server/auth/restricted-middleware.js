
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
      // token not valid
      res.status(401).json({message: "Authentication failed"})
    } else {
      req.decodedToken = decodedToken;

      next();
    }
  })

};
