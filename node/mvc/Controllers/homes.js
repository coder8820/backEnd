const Home = require("../models/home");

// add home
exports.getAddHome = (req, res, next) => {
    res.render('addhome', { pageTitle: 'Add New Home', currentPage: 'add-home' });
}

exports.postAddHome = (req, res, next) => {
    const { housename, location, description, price, imageurl, rating } = req.body
    const home = new Home(housename, location, description, price, rating, imageurl)
    home.save()

    res.render('homeadded', { pageTitle: 'Home Added', currentPage: 'add-home' });
}

// Home page
exports.getHomes = (req, res, next) => {
    const registeredHomes = Home.fetchAll()
    res.render('home', { registeredHomes: registeredHomes, pageTitle: 'Home', currentPage: 'home' });
}

// Dashboard
exports.getDashboard = (req, res, next) => {
    res.render('admin', { pageTitle: 'Admin Dashboard', currentPage: 'dashboard' });
}

// profile

exports.getProfile = (req, res, next) => {
    res.render('profile', { pageTitle: 'User Profile', currentPage: 'profile' });
}

// setting 

exports.getSetting = (req, res) => {
    res.render("settings", { title: "Settings", currentPage: 'settings' });
}