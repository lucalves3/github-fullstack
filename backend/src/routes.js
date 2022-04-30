const express = require('express');
const apiUsersByPagination = require('./Controllers/ApiUsersByPagination');
const ApiUsersFindByName = require('./Controllers/ApiUsersFindByName');
const apiUsersFindRepos = require('./Controllers/ApiUsersFindRepos');

const router = express.Router();

router.get('/api/users', apiUsersByPagination);
router.get('/api/users/:username/repos', apiUsersFindRepos);
router.get('/api/users/:username/details', ApiUsersFindByName);

module.exports = router;