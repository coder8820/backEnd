const express = require('express');
const path = require('path');

const adminRouter = express.Router();



adminRouter.get("/dashboard", (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'admin.html'));
})

module.exports = adminRouter;