const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {
  console.log(req.url, req.method);
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
    res.write("<br/><label for='gender'>Gender:</label>");
    res.write('<input value="male" id="male" name="gender" type="radio">');
    res.write('<br/><label for="male">Male</label>');
    res.write('<input value="female" id="female" name="gender" type="radio">');
    res.write('<label for="female">Female</label>');
    res.write("<input type='submit' value='submit'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    req.on("data", (chunk) => {
      console.log(chunk);
    });
    fs.writeFileSync("userDetails.txt", "Sample User Details");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    // return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write('html lang="en">');
  res.write("<head><title>Complete Node js</title></head>");
  res.write("<body>");
  res.write("<h1>Like / Share / Subscribe</h1>");
  res.write(
    "<h2>This is the only page whrer Im learning Node js for backend </h2>"
  );
  res.write("</body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
