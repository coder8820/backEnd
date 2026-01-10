// Core Modules
const db = require("../utils/databaseUtil");


module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    this.id = id;
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
