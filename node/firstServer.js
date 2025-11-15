let http = require("http");

let server = http.createServer((req, res) => {
  console.log("Request received", req);
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
  process.exit();
});
