const Favourite = require("../models/favourites");
const Home = require("../models/home");

// Home page
exports.getHomes = (req, res, next) => {
    Home.fetchAll(registeredHomes =>
        res.render('store/home-list', { registeredHomes, pageTitle: 'Home', currentPage: 'home-list' })
    );
};

// Home index
exports.getIndex = (req, res, next) => {
    Home.fetchAll(registeredHomes =>
        res.render('store/home-list', { registeredHomes, pageTitle: 'Airbnb Home', currentPage: 'Index home' })
    );
};

// Dashboard
exports.getDashboard = (req, res, next) => {
    res.render('store/admin', { pageTitle: 'Admin Dashboard', currentPage: 'dashboard' });
};

// Profile
exports.getProfile = (req, res, next) => {
    res.render('host/profile', { pageTitle: 'User Profile', currentPage: 'profile' });
};

// Booking detail page
exports.getBooking = (req, res, next) => {
    const homeId = req.params.id;
    Home.fetchById(homeId, home => {
        if (!home) {
            return res.status(404).render('404', { pageTitle: '404' });
        }
        res.render('store/booking', { home, pageTitle: 'Bookings', currentPage: 'bookings' });
    });
};

// All bookings list
exports.getBookings = (req, res, next) => {
    res.render('store/bookings-list', { pageTitle: 'My Bookings', currentPage: 'bookings' });
};

// Settings
exports.getSetting = (req, res, next) => {
    res.render('store/settings', { pageTitle: 'Settings', currentPage: 'settings' });
};

// Favorite list
exports.getFavorits = (req, res, next) => {
    Home.fetchAll(registeredHomes => {
        res.render('store/favorit-list', { registeredHomes, pageTitle: 'Favorites', currentPage: 'favorit-list' });
    });
};

// My Favorites page
exports.getMyFavorites = (req, res, next) => {
    res.render('store/my-favorites', { pageTitle: 'My Favorites', currentPage: 'favorites' });
};

// Home detail page
exports.getHomeDetail = (req, res, next) => {
    const homeId = req.params.id;
    Home.fetchById(homeId, home => {
        if (!home) {
            return res.status(404).render('404', { pageTitle: '404' });
        }
        res.render('store/home-detail', { home, pageTitle: home.housename, currentPage: 'home-detail' });
    });
};

// Add Home - GET
exports.getAddHome = (req, res, next) => {
    res.render('host/edit-home', {
        pageTitle: 'Add Home',
        currentPage: 'add-home',
        editing: false,
        home: {},
    });
};

// Add Home - POST
exports.postAddHome = (req, res, next) => {
    const { housename, location, description, price, rating, imageurl } = req.body;
    const home = new Home(housename, location, description, price, rating, imageurl);
    home.save();
    res.redirect('/');
};

exports.postEditHome = (req, res, next) => {
    const { id, housename, location, description, price, rating, imageurl } = req.body;
    const home = new Home(housename, location, description, price, rating, imageurl);
    home.id = id
    home.save();
    res.redirect('/host/listings');
};

// Host home list
exports.getHostHomeList = (req, res, next) => {
    Home.fetchAll(registeredHomes =>
        res.render('host/host-home-list', { registeredHomes, pageTitle: 'Host Home', currentPage: 'host-home' })
    );
};



// Edit Home - GET
exports.getEditHome = (req, res, next) => {
    const homeId = req.params.id;
    const editing = req.query.editing === 'true'
    Home.fetchById(homeId, home => {
        if (!home) {
            return res.status(404).render('404', { pageTitle: '404' });
        }
        console.log('id=', homeId, 'editing = ', editing, 'homeData = ', home)
        res.render('host/edit-home', {
            home: home,
            pageTitle: 'Edit you Home',
            currentPage: 'edit-home',
            editing: editing
        });
    });
};

