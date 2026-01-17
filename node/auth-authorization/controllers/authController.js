const { check, validationResult } = require("express-validator");

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
    .withMessage('First name should only be alphabets'),
  
  check('email').isEmail().withMessage('Enter a valid email address')
    .normalizeEmail(),
  
  check('password').isLength({ min: 8 }).withMessage('must me 8 character long')
    .matches(/[A-Za-z]/).withMessage('at-least one Capital letter')
    .matches(/[0 - 9]/).withMessage('add one number')
    .matches(/[@#!$%^&]/)
    .trim(),
  
  check('confimPassword').trim()
    .custom((value, { req })=> {
    if(value !== req.body.password) {
        throw new Error('password do not match')
      }
     return true;
    }),
  check('userType').notEmpty().withMessage('user type is required')
    .isIn(['guest', 'host']).withMessage('Invalid user type'),
  check('terms').notEmpty().withMessage('Please accept the terms and conditions')
    .custom((value, { req }) => {
      if (value !== 'on') {
        throw new Error('Please accept the terms and conditions')
      }
      return true
    })
  , (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: 'SignUp',
        currentPage: 'signup',
        isLoggedIn: false,
        errors: errors.array().map(err => err.map),
        oldInput:{firstName,lastName,email,password,userType}
      })
    }
    res.redirect("/login")
}] 