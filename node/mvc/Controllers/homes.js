// add home
exports.getAddHome = (req, res, next) => {
    res.render('addhome', { pageTitle: 'Add New Home', currentPage: 'add-home' });
}



const registeredHomes = [];
exports.postAddHome = (req, res, next) => {
    registeredHomes.push(
        {
            name: req.body.housename,
            location: req.body.location,
            description: req.body.description,
            price: req.body.price,
            image: req.body.imageurl,
            rating: req.body.rating
        }
    );
    res.render('homeadded', { pageTitle: 'Home Added', currentPage: 'add-home' });
}
exports.registeredHomes = registeredHomes;

// Home page
exports.getHomes = (req, res, next) => {
    console.log("Registered Homes: ", registeredHomes);
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