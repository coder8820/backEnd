const sumHandler = (req, res) => {
  let body = [];
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    const parsedBody = new URLSearchParams(body);
    const num1 = parseFloat(parsedBody.get("num1")); // Convert to number
    const num2 = parseFloat(parsedBody.get("num2"));
    const sum = num1 + num2;
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator Result</title></head>
        <body>
            <h1>Calculation Result</h1>
            <p>The sum of ${num1} and ${num2} is <strong>${sum}</strong></p>
            <a href="/calculator">Perform another calculation</a>
            <h3>OR</h3>
            <a href="/">go back to home page</a>
        </body>
      </html>
    `);
    return res.end();
  });
};

// Export the sumHandler function
exports.sumHandler = sumHandler;
