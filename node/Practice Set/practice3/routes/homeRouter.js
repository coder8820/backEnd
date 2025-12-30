// core modules
const path = require('path');

// External modules
const express = require('express');

// Local modules
const rootDir = require('../utils/pathUtils')

const homeRouter = express.Router();

homeRouter.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));

})

module.exports = homeRouter;