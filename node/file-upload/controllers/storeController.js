const Home = require("../models/home");
const User = require("../models/user");

exports.getIndex = (req, res, next) => {
  console.log('Session value', req.session)
  Home.find().then(registeredHomes => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  })
};

exports.getHomes = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = async (req, res, next) => {
  if (!req.session.user) return res.redirect('/login');

  const user = await User
    .findById(req.session.user._id)
    .populate('favourites');

  const cleanFavourites = user.favourites.filter(h => h !== null);

  res.render("store/favourite-list", {
    favouriteHomes: cleanFavourites,
    pageTitle: "My Favourites",
    currentPage: "favourites",
  });
};



exports.postAddToFavourite = async (req, res, next) => {
  try {
    if (!req.session.user) return res.redirect('/login');

    const homeId = req.body._id;
    const userId = req.session.user._id;

    await User.updateOne(
      { _id: userId },
      { $addToSet: { favourites: homeId } }
    );

    res.redirect("/favourites");
  } catch (err) {
    console.log("Error adding favourite:", err);
    res.redirect("/homes");
  }
};




exports.postRemoveFromFavourite = async (req, res, next) => {
  try {
    if (!req.session.user) return res.redirect('/login');

    const homeId = req.params.homeId;
    const userId = req.session.user._id;

    await User.updateOne(
      { _id: userId },
      { $pull: { favourites: homeId } }
    );

    res.redirect("/favourites");
  } catch (err) {
    console.log("Error removing favourite:", err);
    res.redirect("/favourites");
  }
};


exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId).then(home => {
    if (!home) {
      console.log("Home not found");
      res.redirect("/homes");
    } else {
      res.render("store/home-detail", {
        home: home,
        pageTitle: "Home Detail",
        currentPage: "Home",
      });
    }
  })
};

