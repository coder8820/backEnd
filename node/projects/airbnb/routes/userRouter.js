// External modules which is used for routing purpose
const express = require('express');
const userRouter = express.Router();

userRouter.get("/profile", (req, res, next) => {
    res.send(`
        <h1>User Profile Page</h1>
        <p>This is the user profile page of Airbnb application.</p>
        <a href="/">Go Back to Home</a>
    `);
})


module.exports = userRouter;