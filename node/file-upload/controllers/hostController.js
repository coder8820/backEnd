const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeId).then(home => {
    if (!home) {
      return res.redirect("/host/host-home-list");
    }
    // console.log(homeId, editing, home);
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.find().then(registeredHomes => {
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    })
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photo, description } = req.body;
  console.log(req.body)
  const home = new Home({ houseName, price, location, rating, photo, description });
  home.save().then(() => {
    console.log("Home saved successfully.")
  });
  res.redirect("/host/host-home-list");
};



exports.postEditHome = (req, res, next) => {
  const { id, houseName, price, location, rating, photo, description } = req.body;

  Home.findById(id)
    .then(home => {
      if (!home) {
        console.log("❌ Home NOT FOUND for id:", id);
        return res.redirect("/host/host-home-list");
      }

      home.houseName = houseName;
      home.price = price;
      home.location = location;
      home.rating = rating;
      home.photo = photo;
      home.description = description;

      return home.save();
    })
    .then(() => {
      console.log("✅ Home updated successfully");
      res.redirect("/host/host-home-list");
    })
    .catch(err => {
      console.log("Error while updating home", err);
      res.redirect("/host/host-home-list");
    });
};


exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.findByIdAndDelete(homeId).then(() => {
    res.redirect("/host/host-home-list");
  }).catch(error => {
    console.log('Error while editing ', error)
  })
};