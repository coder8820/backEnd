const http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.write("<h1>This is the home page</h1>");
    res.write("<form action='/submit' method='POST>");
    res.write(
      "<input type='text' id='name' name='name' placeholder='enter your name'/>"
    );
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
