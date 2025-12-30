// External modules which is used to create server
const express = require('express');
const path = require('path');

// local module which is used for related to routes
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const hostRouter = require('./routes/hostrouter');
const rootDir = require('./utils/pathUtils');

const app = express();

app.use(express.urlencoded());
app.use(express.static("public"))
app.use(userRouter);
app.use("/admin", adminRouter);
app.use("/host", hostRouter);

app.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
})

// 404 Not found route handler
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})