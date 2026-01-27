// Core Module
const path = require('path');

// External Module
const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const { default: mongoose } = require('mongoose');
const multer = require('multer')
const DB_PATH = "mongodb+srv://coder:coder@cluster0.7it96af.mongodb.net/airbnb";


//Local Module
const storeRouter = require("./routes/storeRouter")
const hostRouter = require("./routes/hostRouter")
const authRouter = require('./routes/authRouter')
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const store = new MongoDBStore({
  uri: DB_PATH,
  collection: 'session'
})

const randomString = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, randomString(10) + '-' + file.originalname);
  }
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, 'public')));
app.use(upload.single('photo'))
app.use('/uploads', express.static(path.join(rootDir, 'uploads')));


app.use(session({
  secret: 'Complete coding with coder',
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: { maxAge: 1000 * 60 * 60 } // 1 hour
}))

app.use((req, res, next) => {
  res.locals.isLoggedIn = !!req.session.isLoggedIn;
  res.locals.user = req.session.user || null;
  next();
});


app.use(storeRouter);
app.use(authRouter);

app.use("/host", (req, res, next) => {
  if (req.session.isLoggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
});
app.use("/host", hostRouter);


app.use(errorsController.pageNotFound);

const PORT = 3001;

mongoose.connect(DB_PATH).then(() => {
  console.log("Successfully Connect to mongoose")
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.log('Error while connecting to mongoose', err)
});