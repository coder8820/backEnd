const express = require('express');
const hostRouter = express.Router();


hostRouter.get("/add-home", (req, res, next) => {
    console.log("is this showing... ", req.body)
    res.send(`
        <h1>Register you home here</h1>
        <form action="/add-home" method="POST">
            <input type="text" name="housename" placeholder="Enter your home name" /><br/><br/>
            <input type="text" name="location" placeholder="Enter your home location" /><br/><br/>
            <input type="number" name="price" placeholder="Enter your home price" /><br/><br/>
            <button type="submit">Submit</button>
        </form>
        `);
})
hostRouter.post("/add-home", (req, res, next) => {
    console.log("is this showing... ", req.body)
    res.send(`
        <h1>Home Registered Successfully</h1>
        <p>Home Name: ${req.body.housename}</p>
        <p>Location: ${req.body.location}</p>
        <p>Price: ${req.body.price}</p>
        <img src="/images/home.jpg" alt="Home Image" width="400" height="300" /><br/><br/>
        <a href="/">Go Back to Home</a>
        `);
})


module.exports = hostRouter;