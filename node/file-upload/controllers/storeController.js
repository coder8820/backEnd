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
  const userId = req.session.user._id;
  const user = await User.findById(userId).populate('favourites');
  console.log('user', user)
    res.render("store/favourite-list", {
      favouriteHomes: user.favourites,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    })
};

exports.postAddToFavourite = async (req, res, next) => {
  const homeId = req.body._id;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  if (!user.favourites.includes(homeId)) {
    user.favourites.push(homeId);
    await user.save()
  }
    res.redirect("/favourites");
}

exports.postRemoveFromFavourite = async (req, res, next) => {
  const homeId = req.params.homeId;
  const userId = req.session.user._id;
  const user = await User.findById(userId);
  console.log('deleted favourite',user)
  if(user.favourites.includes(homeId)) {
    user.favourites = user.favourites.filter(fav => fav.toString() !== homeId);
    await user.save();
  }
    res.redirect("/favourites");
}

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

