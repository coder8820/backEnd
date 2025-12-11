const { sumHandler } = require("./sum");
const requestHandler = (req, res) => {
  // Your request handling logic here
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Practice set</title></head>");
    res.write("<body><h1>Welcome to the Calculator App</h1>");
    res.write("<a href='./calculator'>Go to Calculator</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator</title></head>
        <body>
            <h1>Simple Calculator</h1>
            <form action="/calculator-result" method="POST">
                <input type="number" name="num1" placeholder="First Number" required>
                <input type="number" name="num2" placeholder="Second Number" required>
                <button type="submit">Calculate Sum</button>  
            </form>
        </body>
      </html>`);
    return res.end();
  } else if (req.url === "/calculator-result" && req.method === "POST") {
    sumHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html>
    <head><title>Practice set</title></head>
    <body>
        <h1>404 page does not exist</h1>
    </body>
  </html>`);
};

// Export the requestHandler function
exports.requestHandler = requestHandler;
