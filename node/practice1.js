const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/home") {
    res.write("<h1>Home Page</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Men Page</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>women Page</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Kids Page</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Cart Page</h1>");
    return res.end();
  } else {
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
  }
});

server.listen(3000, () => {
  console.log("Practice Server is listening on http://localhost:3000");
});
