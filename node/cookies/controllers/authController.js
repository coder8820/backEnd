
exports.getLogin = (req, res, next) => {
  console.log("login functionality");
  res.render("auth/login", {
    pageTitle: 'login form',
    currentPage: 'login'
  })
}

exports.postLogin = (req, res, next) => {
  res.redirect("/")
}