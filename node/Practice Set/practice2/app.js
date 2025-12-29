const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
    console.log("First Dummy Middleware", req.url, req.method);
    next();
})

app.use((req, res, next) => {
    console.log("Second Dummy Middleware", req.url, req.method);
    next();
})

// app.use(((req, res, next) => {
//     console.log("This is the Third Middleware for post request");
//     res.send("<h1>This is the third middleware</h1>");
// }))

app.get("/", (req, res, next) => {
    console.log("Handling the GET request");
    res.send("<h1>This is the GET request</h1>");
})


app.get("/contact-us", (req, res, next) => {
    console.log("Handling the Contact Us GET request");
    res.send(`
        <h1>Contact Us Page</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name" /><br/><br/>
            <input type="email" name="email" placeholder="Enter your email" /><br/><br/>
            <input type="password" name="password" placeholder="Enter your password" /><br/><br/>
            <button type="submit">Submit</button>
        </form>
    `);
})

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
    console.log("Handling the Contact Us POST request", req.url, req.method, req.body);
    res.send("<h1>Thank you for contacting us!</h1>");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})