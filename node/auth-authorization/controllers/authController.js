const { check } = require("express-validator");

exports.getLogin = (req, res, next) => {
  console.log("login functionality");
  res.render("auth/login", {
    pageTitle: 'login form',
    currentPage: 'login',
    isLoggedIn: false,
  })
}

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  req.session.isLoggedIn = true;
  res.redirect("/")
}
exports.postLogout = (req, res) => {
  res.clearCookie('isLoggedIn');
  req.session.destroy(() => {
    res.redirect('/login')
  })
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    pageTitle: 'signup page',
    currentPage: 'signup',
    isLoggedIn: false
  })
}
exports.postSignup = [
  check('firstName').trim().isLength({ min: 2 })
    .withMessage('First name should be 2 character long')
    .matches(/^[A-Za-z\s]+$/)
    .withMessage('First name should only be alphabets'),
  
  check('lastName')
    .matches(/^[A-Za-z\s]*$/)
    .withMessage('First name should only be alphabets')
  
,(req, res, next) => {
   console.log(req.body);
  res.redirect("/")
}]