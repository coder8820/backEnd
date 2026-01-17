
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
  console.log(req.body);
  res.render('auth/signup', {
    pageTitle: 'signup page',
    currentPage: 'signup',
    isLoggedIn: false
  })
}