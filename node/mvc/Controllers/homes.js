exports.getAddHome = (req, res, next) => {
    res.render('addhome', { pageTitle: 'Add New Home', currentPage: 'add-home' });
}