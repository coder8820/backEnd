const http = require("http");

const requestHandler = require("./user")


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.end("Hello from the server!");

})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})