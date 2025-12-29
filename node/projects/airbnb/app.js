// External modules which is used to create server
const express = require('express');

// local module which is used for user related routes
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const hostRouter = require('./routes/hostrouter')

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());
app.use(express.static("public"))
app.use(userRouter);
app.use(adminRouter)
app.use(hostRouter);

app.get("/", (req, res, next) => {
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/host/add-home">Add Home </a><br/><br/>
        <a href="/admin/dashboard">Dashboard</a><br/><br/>
        <img src="/images/airbnb.jpg" alt="Airbnb Logo" width="200" height="200" /><br/><br/>
        <a href="/profile">User Profile</a>
        `);
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})