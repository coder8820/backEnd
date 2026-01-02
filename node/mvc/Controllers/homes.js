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
