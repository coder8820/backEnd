const express = require('express');
// Core Module
const path = require('path');

// local module
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtils');

const hostController = require('../Controllers/homes')


hostRouter.get("/add-home", hostController.getAddHome)

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
    registeredHomes.push(
        {
            name: req.body.housename,
            location: req.body.location,
            description: req.body.description,
            price: req.body.price,
            image: req.body.imageurl,
            rating: req.body.rating
        }
    );
    res.render('homeadded', { pageTitle: 'Home Added', currentPage: 'add-home' });
})


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;