// Errors and Debugging in Node.js
// This script demonstrates error handling and debugging techniques in Node.js

// first creating  a server using http module

const http = require("http");

const testingSyntex = require("./syntex");
const testingSyntes = require("./runtime");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    testingSyntex();
    testingSyntes();
    res.end("Hello from the server!");

})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})