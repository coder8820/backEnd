// External Module
const express = require("express");
const hostRouter = express.Router();
const multer = require('multer');

// Local Module
const hostController = require("../controllers/hostController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});

const upload = multer({ storage });
// const upload = multer({ dest: 'uploads/' });

hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", upload.single('photo'),hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomes);
hostRouter.get("/edit-home/:homeId", hostController.getEditHome);
hostRouter.post("/edit-home",upload.single('photo'), hostController.postEditHome);
hostRouter.post("/delete-home/:homeId", hostController.postDeleteHome);

module.exports = hostRouter;
