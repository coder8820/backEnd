const Home = require("../models/home");

// Home page
exports.getHomes = (req, res, next) => {
    Home.fetchAll(registeredHomes =>
        res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'Home', currentPage: 'home' }));
}

// Dashboard
exports.getDashboard = (req, res, next) => {
    res.render('store/admin', { pageTitle: 'Admin Dashboard', currentPage: 'dashboard' });
}

// profile

exports.getProfile = (req, res, next) => {
    res.render('host/profile', { pageTitle: 'User Profile', currentPage: 'profile' });
}

// booking
exports.getBooking = (req, res, next) => {
    const homeId = req.params.id;
    Home.fetchById(homeId, (home) => {
        if (!home) {
            return res.status(404).render('404', { pageTitle: '404' });
        }
        res.render('store/booking', { home: home, pageTitle: 'Bookings', currentPage: 'Bookings' })
    })
}

// all bookings list
exports.getBookings = (req, res, next) => {
    res.render('store/bookings-list', { pageTitle: 'My Bookings', currentPage: 'bookings' })
}


// setting 

exports.getSetting = (req, res) => {
    res.render("store/settings", { title: "Settings", currentPage: 'settings' });
}