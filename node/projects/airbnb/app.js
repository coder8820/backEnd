const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
})

app.get("/", (req, res, next) => {
    res.send(`
        <h1>Welcome to Airbnb</h1>
        <a href="/add-home">Add Home </a>
        `);
})
app.get("/add-home", (req, res, nextd) => {
    res.send(`
        <h1>Add your Home</h1>
        <form action="/add-home" method="POST">
            <input type="text" name="name" placeholder="Enter your home name" /><br/><br/>
            <input type="text" name="location" placeholder="Enter your home location" /><br/><br/>
            <input type="number" name="price" placeholder="Enter your home price" /><br/><br/>
            <button type="submit">Submit</button>
        </form>
        
        `)

})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})