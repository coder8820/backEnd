const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("First Dummy Middleware");
    next();
})

app.use((req, res, next) => {
    console.log("Second Dummy Middleware");
    next();
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})