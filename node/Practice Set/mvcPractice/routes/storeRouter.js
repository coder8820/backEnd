// External modules which is used for routing purpose
const express = require('express');
// Core Module
// const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); //

// local module
const storeRouter = express.Router();
const rootDir = require('../utils/pathUtils');
const hostController = require('../Controllers/storeController')


storeRouter.get("/", hostController.getIndex)
storeRouter.get("/index", hostController.getHomes)
storeRouter.get("/bookings", hostController.getBookings)
storeRouter.get("/favorit-list", hostController.getFavorits)
storeRouter.get("/booking/:id", hostController.getBooking)

module.exports = storeRouter;