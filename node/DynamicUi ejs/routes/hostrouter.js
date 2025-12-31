const express = require('express');
// Core Module
const path = require('path');

// local module
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtils');


hostRouter.get("/add-home", (req, res, next) => {
    console.log("is this showing... ", req.body)
    res.sendFile(path.join(rootDir, 'views', 'addhome.html'));
})
hostRouter.post("/add-home", (req, res, next) => {
    console.log("is this showing... ", req.body)
    res.sendFile(path.join(rootDir, 'views', 'homeadded.html'));
})


module.exports = hostRouter;