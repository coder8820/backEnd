// Core Modules
const db = require("../utils/databaseUtil");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() { }

  static fetchAll(callback) {
    return db.execute('SELECT * FROM homes');
  }

  static findById(homeId, callback) {

  }

  static deleteById(homeId, callback) {

  }
};
