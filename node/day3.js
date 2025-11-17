let http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.write("<h1>This is the home page</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>This is the about page</h1>");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Node js</title></head>");
    res.write("<body><h1>Welcome to complete coding</h1></body>");
    res.write("</html>");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
