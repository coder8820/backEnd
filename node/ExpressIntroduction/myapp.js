// Errors and Debugging in Node.js
// This script demonstrates error handling and debugging techniques in Node.js

// first creating  a server using http module

const http = require("http");

const calculateAre = require("./practice");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    calculateAre(10, 20);
    res.end("Hello from the server!");

})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})