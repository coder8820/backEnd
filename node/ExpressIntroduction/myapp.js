// Core module
const http = require("http");

// External module or Third party module
const express = require("express");

// Local module
const requestHandler = require("./user")

const app = express();

app.use((req, res, next) => {
    console.log("Came in first middleware", req.url, req.method);
})

const server = http.createServer(app)

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})