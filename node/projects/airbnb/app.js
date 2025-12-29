const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("First Middleware", req.url, req.method);
    res.send("<h1>Im working on airbnb Website.</h1>");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})