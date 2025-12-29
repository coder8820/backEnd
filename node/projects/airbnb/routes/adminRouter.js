const express = require('express');

const adminRouter = express.Router();



adminRouter.get("/dashboard", (req, res, next) => {
    res.send(`
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Admin Dashboard of Airbnb application.</p>
        <img src="/images/airbnb.jpg" alt="Airbnb Logo" width="200" height="200" /><br/><br/>
        <a href="/">Go Back to Home</a><br/><br/>
        <a href="/contact-us">Contact Us</a>
    `);
})

module.exports = adminRouter;