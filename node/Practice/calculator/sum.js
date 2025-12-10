const sumHandler = (req, res) => {
  if (req.method === "POST" && req.url === "/calculator-result") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const num1 = parseInt(parsedBody.split("&")[0].split("=")[1]);
      const num2 = parseInt(parsedBody.split("&")[1].split("=")[1]);
      const result = num1 + num2;
      res.setHeader("Content-Type", "text/html");
      res.write(`
        <html>
          <head><title>Calculation Result</title></head>
          <body>
              <h1>Calculation Result</h1>
              <p>The sum of ${num1} and ${num2} is: <strong>${result}</strong></p>
              <a href="/calculator">Go back to Calculator</a>
          </body>
        </html>`);
      return res.end();
    });
  }
};
