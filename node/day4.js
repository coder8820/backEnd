const http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Node js</title></head>");
    res.write("<body>");
    res.write("<h1>This is the home page</h1>");
    res.write("<form action='/submit-details' method='POST>");
    res.write("<label for='username'>Name:</label>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'>"
    );
    res.write("<label for='gender'>Gender:</label>");
    res.write('<input value="male" id="male" name="gender" type="radio">');
    res.write('<label for="male">Male</label>');
    res.write('<input value="female" id="female" name="gender" type="radio">');
    res.write('<label for="female">Female</label>');
    res.write("<input type='submit' value='submit'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("&")[0].split("=")[1];
      const gender = parsedBody.split("&")[1].split("=")[1];
      console.log("Username:", decodeURIComponent(username));
      console.log("Gender:", decodeURIComponent(gender));
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Page Not Found</title></head>");
    res.write("<body><h1>404 - Page Not Found</h1></body>");
    res.write("</html>");
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
