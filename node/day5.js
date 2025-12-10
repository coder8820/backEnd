// const http = require("http");
const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Complete Node js</title></head>");
    res.write("<body>");
    res.write("<h1>This is the home page</h1>");
    res.write("<form action='/submit-details' method='POST'>");
    res.write("<label for='username'>Name:</label>");
    res.write(
      "<input type='text' name='username' placeholder='Enter your name'>"
    );
    res.write("<br/><label for='email'>Email:</label>");
    res.write(
      '<input type="email" name="email" placeholder="Enter your email...">'
    );
    res.write("<br/><label for='gender'>Gender:</label>");
    res.write('<br/><input value="male" id="male" name="gender" type="radio">');
    res.write('<label for="male">Male</label>');
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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk); //Buffer data pushed into array of body
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      // const jsonData = {};
      // for (const [key, value] of params.entries()) {
      //   jsonData[key] = value;
      // }
      const jsonData = Object.fromEntries(params.entries());
      console.log(jsonData);
      const jsonString = JSON.stringify(jsonData);
      fs.writeFileSync("userDetails.json", jsonString);
    });

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
};

// exporting requestHandler function
module.exports = requestHandler;

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is listening on http://localhost:${PORT}`);
// });
