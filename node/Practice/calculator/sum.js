const sumHandler = (req, res) => {
  let body = [];
  let sum;
  let sub;
  let multiplication;
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2. Data event came")
  });
  req.on("end", () => {
    console.log("3. End event came")
    body = Buffer.concat(body).toString();
    const parsedBody = new URLSearchParams(body);
    const num1 = parseFloat(parsedBody.get("num1")); // Convert to number
    const num2 = parseFloat(parsedBody.get("num2"));
    sum = num1 + num2;
    sub = num1 - num2;
    multiplication = num1 * num2;
    console.log(sum);
    console.log(sub);
    console.log(multiplication);
    console.log("4. Before sending response");
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
        <head><title>Calculator Result</title></head>
        <body>
            <h1>Calculation Result</h1>
            <p>The sum of ${num1} and ${num2} is <strong>${sum}</strong></p>
            <p>The difference when ${num2} is subtracted from ${num1} is <strong>${sub}</strong></p>
            <p>The product of ${num1} and ${num2} is <strong>${multiplication}</strong></p>
            <p>------------------------------------------------</p>
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
