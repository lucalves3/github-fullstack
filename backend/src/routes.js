const express = require('express');
const apiUsers = require('./Controllers/UsersController');

const router = express.Router();

router.get('/api/users', apiUsers);

module.exports = router;