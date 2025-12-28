// Core module
// const http = require("http");

// External module or Third party module
const express = require("express");

// Local module
const requestHandler = require("./user")

const app = express();

app.use(express.json());// to parse json data coming from client side and populate in req.body

app.use((req, res, next) => {
    console.log("Came in first middleware", req.url, req.method);
    // res.send("<h1>Hello this responce from First middleware</h1>");
    next();
})

app.use((req, res, next) => {
    // requestHandler(req, res);
    console.log("Came second from request handler");
    res.send("<h1>Hello this responce from Second middleware</h1>");
});


// const server = http.createServer(app)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})