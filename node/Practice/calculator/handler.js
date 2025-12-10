const requestHandler = (req, res) => {
  // Your request handling logic here
  console.log(req.url, req.method);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from the calculator server!\n");
};

module.exports = requestHandler;
