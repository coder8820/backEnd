const path = require('path');
const fs = require('fs');

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
    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit Home",
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

exports.postAddHome = async (req, res, next) => {
  try {
    const { houseName, price, location, rating, description } = req.body;

    if (!req.file) {
      console.log('No image provided');
      return res.status(422).send('No image provided');
    }

    // Windows path fix
    const photoPath = req.file.path.replace(/\\/g, '/');

    // Assign host from session
    const home = new Home({
      houseName,
      price,
      location,
      rating,
      description,
      photo: photoPath,
      host: req.session.user._id   // <-- THIS IS REQUIRED
    });

    await home.save();
    console.log("✅ Home saved successfully.");

    res.redirect("/host/host-home-list");

  } catch (err) {
    console.log("❌ Error in adding home:", err);
    res.redirect("/host/add-home");
  }
};



exports.postEditHome = async (req, res, next) => {
  try {
    const { id, houseName, price, location, rating, description } = req.body;

    // Find the home first
    const home = await Home.findById(id);
    if (!home) {
      console.log("❌ Home not found");
      return res.redirect("/host/host-home-list");
    }

    // Ensure the logged-in host is editing their own home
    if (home.host.toString() !== req.session.user._id) {
      console.log("❌ Unauthorized attempt to edit home");
      return res.redirect("/host/host-home-list");
    }

    // Update fields
    home.houseName = houseName;
    home.price = price;
    home.location = location;
    home.rating = rating;
    home.description = description;

    // Update photo if uploaded
    if (req.file) {
      const photoPath = req.file.path.replace(/\\/g, '/');
      home.photo = photoPath;
    }

    // Re-assign host just in case
    home.host = req.session.user._id;

    await home.save();
    console.log("✅ Home updated successfully");

    res.redirect("/host/host-home-list");

  } catch (err) {
    console.log("❌ Error while updating home:", err);
    res.redirect("/host/host-home-list");
  }
};


exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findById(homeId)
    .then(home => {
      if (!home) {
        return res.redirect("/host/host-home-list");
      }

      // 🔥 IMAGE DELETE FROM DISK
      const imagePath = path.join(
        __dirname,
        '..',
        home.photo   // e.g. /uploads/abc.jpg
      );

      fs.unlink(imagePath, err => {
        if (err) {
          console.log("❌ Error deleting image:", err);
        } else {
          console.log("🗑 Image deleted from disk");
        }
      });

      // 🔥 DELETE FROM DB
      return Home.findByIdAndDelete(homeId);
    })
    .then(() => {
      console.log("✅ Home deleted successfully");
      res.redirect("/host/host-home-list");
    })
    .catch(err => {
      console.log("❌ Error while deleting home", err);
      res.redirect("/host/host-home-list");
    });
};
