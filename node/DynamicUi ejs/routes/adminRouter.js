const express = require('express');
// Core Module
const path = require('path');

const app = express();


app.set('view engine', 'ejs');// setting up ejs as template engine
app.set('views', 'views'); // setting up views folder for ejs templates



// local module
const adminRouter = express.Router();
const rootDir = require('../utils/pathUtils');


adminRouter.get("/dashboard", (req, res, next) => {
    res.render('admin', { pageTitle: 'Admin Dashboard' });
})

module.exports = adminRouter;