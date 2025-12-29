const express = require('express');

const adminRouter = express.Router();

adminRouter.get("/admin/dashboard", (req, res, next) => {
    res.send(`
        <h1>Admin Dashboard</h1>
        <p>Welcome to the Admin Dashboard of Airbnb application.</p>
        <a href="/">Go Back to Home</a>
    `);
})

module.exports = adminRouter;