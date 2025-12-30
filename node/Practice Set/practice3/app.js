// External Modules
const express = require('express');

// local modules
const homeRouter = require('./routes/homeRouter')

const app = express();

app.use(homeRouter);


app.get("/", (req, res, next) => {
})


app.get("/contact-us", (req, res, next) => {
    console.log("Handling the Contact Us GET request", req.url, req.method);
    res.send(`
       
    `);
})

// app.post("/contact-us", (req, res, next) => {
//     console.log("First handling body parse!", req.url, req.method, req.body);
//     res.send("<h1>First handling body parse!</h1>");
//     next();
// })



app.post("/contact-us", (req, res, next) => {
    res.send("");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})