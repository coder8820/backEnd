const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.write(`
    <html>
    <head><title>Practice Page</title></head>
    <body>
        <nav>
            <a href="/home">Home</a> |
            <a href="/men">Man</a> |
            <a href="/women">Women</a> |
            <a href="/kids">Kids</a> |
            <a href="/cart">🛒</a>
        </nav>
        <h1>Welcome to the Practice Page</h1>
    </body>
    </html>`);
  res.end();
});

server.listen(3000, () => {
  console.log("Practice Server is listening on http://localhost:3000");
});
