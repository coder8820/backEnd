// External modules which is used to create server
const express = require('express');
const path = require('path');

// local module which is used for related to routes
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const { hostRouter } = require('./routes/hostrouter');
const rootDir = require('./utils/pathUtils');
const { registeredHomes } = require('./routes/hostrouter');

const app = express();


app.set('view engine', 'ejs');// setting up ejs as template engine
app.set('views', 'views'); // setting up views folder for ejs templates




app.use(express.urlencoded());
app.use(express.static("public"))// why we use static the reason is to access css and image files because these files are static files it means these files will not change over time
app.use(userRouter);
app.use("/admin", adminRouter);
app.use("/host", hostRouter);


app.get("/", (req, res, next) => {
    console.log("Registered Homes: ", registeredHomes);
    res.render('home', { registeredHomes: registeredHomes || [] });
})

// 404 Not found route handler
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})