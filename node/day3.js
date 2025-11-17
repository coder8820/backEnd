let http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home page</title></head>");
    res.write("<body><h1>This is home page</h1></body>");
    res.write("</html>");
    res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>About page</title></head>");
    res.write("<body><h1>This is about page</h1></body>");
    res.write("</html>");
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
