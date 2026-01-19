const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require('bcryptjs')

exports.getLogin = (req, res, next) => {
  console.log("login functionality");
  res.render("auth/login", {
    pageTitle: 'login form',
    currentPage: 'login',
    isLoggedIn: false,
  })
}

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).render('auth/login', {
      pageTitle: 'login',
      currentPage: 'login',
      isLoggedIn: false,
      errors: ['User does not exist'],
      oldInput:{email}
    })
  }



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
    isLoggedIn: false,
    errors: [],
    oldInput: { firstName: '',lastName:'',email:'',userType:''}
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
    .matches(/[A-Z]/).withMessage('At least one capital letter')
    .matches(/[0-9]/).withMessage('Add at least one number')
    .matches(/[@#!$%^&]/).withMessage('Add one special character')
    .trim(), 
  
  check('confirmPassword').trim()
    .custom((value, { req })=> {
    if(value !== req.body.password) {
        throw new Error('Confirm password must match password')
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
        errors: errors.array().map(err => err.msg),
        oldInput:{firstName,lastName,email,password,userType}
      })
    }

    bcrypt.hash(password, 12).then(hashedPassword => {
      const user = new User({ firstName, lastName, email, password: hashedPassword, userType });
      return user.save();
    }).then(() => {
      res.redirect('/login')
    }).catch(err => {
      return res.status(422).render('auth/signup', {
        pageTitle: 'Signup',
        currentPage: 'signup',
        isLoggedIn: false,
        errors: [err.message],
        oldInput:{firstName,lastName,email,password,userType}
      })
    })

  }] 
