const express = require('express');
const path = require('path');
const hostRouter = express.Router();


hostRouter.get("/add-home", (req, res, next) => {
    console.log("is this showing... ", req.body)
    res.sendFile(path.join(__dirname, '..', 'views', 'addhome.html'));
})
hostRouter.post("/add-home", (req, res, next) => {
    console.log("is this showing... ", req.body)
    res.sendFile(path.join(__dirname, '..', 'views', 'homeadded.html'));
})


module.exports = hostRouter;