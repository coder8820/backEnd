const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
      isLoggedIn: req.isLoggedIn
    })
  })
};

exports.getHomes = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
      isLoggedIn: req.isLoggedIn
    })
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
    isLoggedIn: req.isLoggedIn
  })
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.find().populate('houseId').then(favourites => {
    const favouriteHomes = favourites.map((fav) => fav.houseId)
    res.render("store/favourite-list", {
      favouriteHomes: favouriteHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
      isLoggedIn: req.isLoggedIn
    })
  });
};

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body._id;
  const fav = new Favourite({ houseId: homeId })
  fav.save().then(reseult => {
    console.log('Fav added ', reseult)
  }).catch(err => {
    console.log('error while add to favourite', err)
  }).finally(() => {
    res.redirect("/favourites");
  })
}

exports.postRemoveFromFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteOne({ houseId: homeId }).then(reseult => {
    console.log('Fav removed ', reseult)
  }).catch(err => {
    console.log('error while removing from favourite', err)
  }).finally(() => {
    res.redirect("/favourites");
  })
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
        isLoggedIn: req.isLoggedIn
      });
    }
  })
};

