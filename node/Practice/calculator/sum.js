const sumHandler = (req, res) => {
  console.log("Inside sumHandler", req.url);
};

// Export the sumHandler function
exports.sumHandler = sumHandler;
