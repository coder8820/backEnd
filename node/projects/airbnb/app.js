// External modules which is used to create server
const express = require('express');

// local module which is used for user related routes
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter')

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());
app.use(express.static("public"))
app.use(userRouter);
app.use(adminRouter)

app.get("/", (req, res, next) => {
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/host/add-home">Add Home </a><br/><br/>
        <a href="/admin/dashboard">Dashboard</a><br/><br/>
        <img src="/images/airbnb.jpg" alt="Airbnb Logo" width="200" height="200" /><br/><br/>
        <a href="/profile">User Profile</a>
        `);
})
app.get("/host/add-home", (req, res, next) => {
    console.log("is this showing... ", req.body)
    res.send(`
        <h1>Register you home here</h1>
        <form action="/host/add-home" method="POST">
            <input type="text" name="housename" placeholder="Enter your home name" /><br/><br/>
            <input type="text" name="location" placeholder="Enter your home location" /><br/><br/>
            <input type="number" name="price" placeholder="Enter your home price" /><br/><br/>
            <button type="submit">Submit</button>
        </form>
        `);
})
app.post("/host/add-home", (req, res, next) => {
    console.log("is this showing... ", req.body)
    res.send(`
        <h1>Home Registered Successfully</h1>
        <p>Home Name: ${req.body.housename}</p>
        <p>Location: ${req.body.location}</p>
        <p>Price: ${req.body.price}</p>
        <a href="/">Go Back to Home</a>
        `);
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})