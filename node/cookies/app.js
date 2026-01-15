// Core Module
const path = require('path');

// External Module
const express = require('express');

//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const authRouter = require('./routes/authRouter')
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { default: mongoose } = require('mongoose');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


// app.use((req, res, next) => {
//   req.isLoggedIn = req.get('Cookie') ? req.get('Cookie').split('=')[1] === 'true' : false;
//   res.locals.isLoggedIn = req.isLoggedIn;
//   next();
// })

app.use((req, res, next) => {
  const cookie = req.headers.cookie;

  req.isLoggedIn = cookie && cookie.includes("isLoggedIn=true");
  res.locals.isLoggedIn = req.isLoggedIn;

  next();
});


app.use(express.urlencoded({ extended: true }));
app.use(storeRouter);
app.use(authRouter);

app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
});
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, 'public')))

app.use(errorsController.pageNotFound);

const PORT = 3001;
const DB_PATH = "mongodb+srv://coder:coder@cluster0.7it96af.mongodb.net/airbnb";

mongoose.connect(DB_PATH).then(() => {
  console.log("Successfully Connect to mongoose")
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log('Error while connecting to mongoose', err)
});