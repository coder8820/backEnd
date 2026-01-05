// External modules which is used to create server
const express = require('express');
const path = require('path');

// local module which is used for related to routes
const storeRouter = require('./routes/storeRouter');
const adminRouter = require('./routes/adminRouter');
const { hostRouter } = require('./routes/hostrouter');
const errorController = require('./Controllers/errors')

const app = express();


// Serve static files (CSS, JS, images) from public folder
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'ejs');// setting up ejs as template engine
app.set('views', 'views'); // setting up views folder for ejs templates




app.use(express.urlencoded());
app.use(storeRouter);
app.use("/admin", adminRouter);
app.use("/host", hostRouter);

const hostController = require('./Controllers/homes')

app.get("/", hostController.getHomes)

// 404 Not found route handler
app.use(errorController.pageNotFound)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})