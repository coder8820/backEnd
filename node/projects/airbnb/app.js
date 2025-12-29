// External modules which is used to create server
const express = require('express');

// local module which is used for related to routes
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const hostRouter = require('./routes/hostrouter')

const app = express();

app.use(express.urlencoded());
app.use(express.static("public"))
app.use(userRouter);
app.use("/admin", adminRouter);
app.use("/host", hostRouter);

app.get("/", (req, res, next) => {
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/host/add-home">Add Home </a><br/><br/>
        <a href="/admin/dashboard">Dashboard</a><br/><br/>
        <img src="/images/airbnb.jpg" alt="Airbnb Logo" width="200" height="200" /><br/><br/>
        <a href="/profile">User Profile</a>
        `);
})

// 404 Not found route handler
app.use((req, res, next) => {
    res.status(404).send(`
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Go Back to Home</a>`)
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})