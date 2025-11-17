const http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>This is the home page</h1>");
    res.write("<form action='/submit-details' method='POST>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'>"
    );
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split("=")[1];
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write(`<h1>Thank you, ${decodeURIComponent(name)}!</h1>`);
      res.write("</body>");
      res.write("</html>");
      return res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>404 - Page Not Found</h1>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
