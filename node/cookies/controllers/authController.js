
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

// exports.postLogout = (req, res, next) => {
//   res.clearCookie('isLoggedIn');
//   res.redirect('/login')
// }

exports.postLogout = (req, res) => {
  res.clearCookie('isLoggedIn');
  res.render('auth/logout', {
    pageTitle: 'Logged Out'
  });
};
