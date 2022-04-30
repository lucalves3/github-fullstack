const express = require('express');
const router = require('./routes');
require('dotenv').config();

const server = express()
server.use(express.json());
server.use(router);

console.log('Running on door 3001');
server.listen(3001);