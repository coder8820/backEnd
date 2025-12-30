// core modules
const path = require('path');
// External Modules
const express = require('express');

// local modules
const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter')
const rootDir = require('./utils/pathUtils')

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(homeRouter)
app.use(contactRouter)

// 404 Not found route handler
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})