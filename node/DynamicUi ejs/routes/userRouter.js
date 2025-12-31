// External modules which is used for routing purpose
const express = require('express');
// Core Module
const path = require('path');

// local module
const userRouter = express.Router();
const rootDir = require('../utils/pathUtils');

userRouter.get("/profile", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'profile.html'));
})


module.exports = userRouter;