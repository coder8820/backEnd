const express = require('express');
// Core Module
const path = require('path');

const app = express();


app.set('view engine', 'ejs');// setting up ejs as template engine
app.set('views', 'views'); // setting up views folder for ejs templates



// local module
const adminRouter = express.Router();
const hostController = require('../Controllers/homes')



adminRouter.get("/dashboard", hostController.getDashboard)

module.exports = adminRouter;