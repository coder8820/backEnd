const http = require("http");

const server = http.createServer();

server.listen(3000);

server.on("listening", () => {
  console.log("Server is listening on port 3000");
});

server.on("error", (error) => {
  console.error("Error occurred:", error);
});
server.on("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});
