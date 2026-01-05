const express = require('express');

// local module
const hostRouter = express.Router();

const hostController = require('../Controllers/storeController')

hostRouter.get("/dashboard", hostController.getDashboard)
hostRouter.get("/profile", hostController.getProfile)
hostRouter.get("/settings", hostController.getSetting)
hostRouter.get("/add-home", hostController.getAddHome)
hostRouter.post("/add-home", hostController.postAddHome)


module.exports = hostRouter