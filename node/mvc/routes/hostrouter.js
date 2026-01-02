const express = require('express');
// Core Module
const path = require('path');

// local module
const hostRouter = express.Router();
const rootDir = require('../utils/pathUtils');

const hostController = require('../Controllers/homes')


hostRouter.get("/add-home", hostController.getAddHome)

const registeredHomes = [];

hostRouter.post("/add-home", hostController.postAddHome)


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;