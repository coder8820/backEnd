// fake database
const registeredHomes = [];

module.exports = class Home {
    constructor(housename, location, description, price, rating, imageurl) {
        this.housename = housename,
            this.location = location,
            this.description = description,
            this.price = price,
            this.rating = rating,
            this.imageurl = imageurl
    }

    save() {
        registeredHomes.push(this)
    }

    static fetchAll() {
        return registeredHomes
    }

}