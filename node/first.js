console.log("Hellow world this is my first Node.js file!");
// ------------------ first logic -------------

const fs = require("fs");

let a = 10;
let b = 20;

let sum = a + b;
let product = a * b;

let explain = 'This program calculates the sum and product of two numbers using Node.js.';

let data = `The sum of ${a} and ${b} is ${sum}, and their product is ${product} `;

fs.writeFile("output.txt", data, (err) => {
  if (err) throw err;
  console.log("File written successfully");
});

// Creating a simple HTTP server to handle requests
let count = 0;

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/increment") {
    count += 2;
    res.end(`Count is now: ${count}`);
  } else {
    res.end(
      "Welcome to the Node.js server. Click /increment to increase the count by 2."
    );
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// To run this file, use the command: node first.js
// Then navigate to http://localhost:3000/increment to see the count increment.
