const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

// exports.getLogin = (req, res, next) => {
//   console.log("login functionality");
//   res.render("host/login", {
//     pageTitleL: 'login form',
//     currentPage: 'login',
//     editing: false
//   })
// }