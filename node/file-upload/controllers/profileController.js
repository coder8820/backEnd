const User = require("../models/user");
const Home = require("../models/home");

exports.getProfile = async (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  const user = await User.findById(req.session.user._id)
    .populate("favourites");

  let hostHomes = [];
  if (user.userType === "host") {
    hostHomes = await Home.find({ host: user._id });
  }

  res.render("profile/profile", {
    user,
    hostHomes,
    pageTitle: "My Profile",
    currentPage: "profile"
  });
};
