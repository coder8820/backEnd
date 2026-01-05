const express = require('express');

// local module
const hostRouter = express.Router();

const hostController = require('../Controllers/homes')


hostRouter.get("/add-home", hostController.getAddHome)
hostRouter.post("/add-home", hostController.postAddHome)


module.exports = hostRouter