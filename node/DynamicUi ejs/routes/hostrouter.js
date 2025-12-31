const express = require('express');
// Core Module
const path = require('path');

// local module
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtils');


hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addhome.html'));
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    console.log("Home registered successfully... ", req.body, req.body.housename)
    registeredHomes.push({ name: req.body.housename, location: req.body.location, price: req.body.price })
    res.sendFile(path.join(rootDir, 'views', 'homeadded.html'));
})


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;