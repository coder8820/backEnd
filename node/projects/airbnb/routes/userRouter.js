// External modules which is used for routing purpose
const path = require('path');
const express = require('express');
const userRouter = express.Router();

userRouter.get("/profile", (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'profile.html'));
})


module.exports = userRouter;