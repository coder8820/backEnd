const express = require('express');
// Core Module
const path = require('path');

// local module
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtils');


hostRouter.get("/add-home", (req, res, next) => {
    res.render('addhome', { pageTitle: 'Add New Home' });
})

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    registeredHomes.push({ name: req.body.housename, location: req.body.location, description: req.body.description, price: req.body.price })
    res.render('homeadded', { pageTitle: 'Home Added' });
})


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;