const requestHandler = (req, res) => {
  // Your request handling logic here
  console.log(req.url, req.method);
  // res.statusCode = 200;
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Practice set</title></head>");
    res.write("<body><h1>Welcome to the Calculator App</h1>");
    res.write("<a href='./calculator'>Go to Calculator</a>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Practice set</title></head>");
  res.write("<body><h1>404 page does not exist</h1></body>");
  res.write("</html>");
};

// Export the requestHandler function
exports.requestHandler = requestHandler;
