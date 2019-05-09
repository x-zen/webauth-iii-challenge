const express = require('express');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
  res.send("Authentication Base | By: x-zen");
});

module.exports = server;
