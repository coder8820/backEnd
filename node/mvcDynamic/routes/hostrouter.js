const express = require('express');
const hostRouter = express.Router();
const hostController = require('../Controllers/storeController'); // make sure folder name matches exactly

// Dashboard & Profile
hostRouter.get("/dashboard", hostController.getDashboard);
hostRouter.get("/profile", hostController.getProfile);
hostRouter.get("/settings", hostController.getSetting);

// Host Listings
hostRouter.get("/listings", hostController.getHostHomeList);

// Add Home
hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.postAddHome);

// Edit Home
hostRouter.get("/edit-home/:id", hostController.getEditHome);
hostRouter.post('/edit-home', hostController.postEditHome)


hostRouter.get('/listings', hostController.getHostHomeList)


module.exports = hostRouter;
