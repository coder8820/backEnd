const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.use(express.urlencoded());

app.get("/", (req, res, next) => {
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/add-home">Add Home </a>
        `);
})
app.get("/add-home", (req, res, next) => {
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
app.post("/add-home", (req, res, next) => {
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