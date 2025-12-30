// External Modules
const express = require('express');

// local modules
const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter')

const app = express();

app.use(homeRouter)
app.use(contactRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
})