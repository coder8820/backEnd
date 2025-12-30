const express = require('express');
// Core Module
const path = require('path');

// local module
const adminRouter = express.Router();
const rootDir = require('../utils/pathUtils');


adminRouter.get("/dashboard", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
})

module.exports = adminRouter;