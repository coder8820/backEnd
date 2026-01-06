const Home = require("../models/home");

// Home page
exports.getHomes = (req, res, next) => {
    Home.fetchAll(registeredHomes =>
        res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'Home', currentPage: 'home-list' }));
}
// home index
exports.getIndex = (req, res, next) => {
    Home.fetchAll(registeredHomes =>
        res.render('store/home-list', { registeredHomes: registeredHomes, pageTitle: 'airbnb Home', currentPage: 'Index home' }));
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

// Favorite list
exports.getFavorits = (req, res, next) => {
    Home.fetchAll(registeredHomes =>
        res.render('store/favorit-list', { registeredHomes: registeredHomes, pageTitle: 'Favorites', currentPage: 'favorit-list' }));
}

// Home detail page
exports.getHomeDetail = (req, res, next) => {
    const homeId = req.params.id;
    Home.fetchById(homeId, (home) => {
        if (!home) {
            return res.status(404).render('404', { pageTitle: '404' });
        }
        res.render('store/home-detail', { home: home, pageTitle: home.housename, currentPage: 'home-detail' })
    })
}

// Add home - GET
exports.getAddHome = (req, res, next) => {
    res.render('host/addhome', { pageTitle: 'Add Home', currentPage: 'add-home' });
}

// Add home - POST
exports.postAddHome = (req, res, next) => {
    const { housename, location, description, price, rating, imageurl } = req.body;
    const home = new Home(housename, location, description, price, rating, imageurl);
    home.save();
    res.redirect('/');
}

// My Favorites page
exports.getMyFavorites = (req, res, next) => {
    res.render('store/my-favorites', { pageTitle: 'My Favorites', currentPage: 'favorites' });
}

// Host home list
exports.getHostHomeList = (req, res, next) => {
    Home.fetchAll(registeredHomes =>
        res.render('host/host-home-list', { registeredHomes: registeredHomes, pageTitle: 'My Listings', currentPage: 'listings' }));
}