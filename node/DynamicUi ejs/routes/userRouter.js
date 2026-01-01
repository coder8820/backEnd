// External modules which is used for routing purpose
const express = require('express');
// Core Module
const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); //

// local module
const userRouter = express.Router();
const rootDir = require('../utils/pathUtils');

userRouter.get("/profile", (req, res, next) => {
    res.render('profile', { pageTitle: 'User Profile' });
})


module.exports = userRouter;