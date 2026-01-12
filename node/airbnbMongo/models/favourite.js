const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtil");

module.exports = class Favourite {

  constructor(houseId) {
    this.houseId = new ObjectId(houseId);
  }

  save() {
    const db = getDB();
    return db.collection('favourites').insertOne(this)
  }

  static getFavourites() {
    const db = getDB();
    return db.collection('favourites').find().toArray()
  }

  static deleteById(delHomeId) {
    const db = getDB();
    return db.collection('favourites').deleteOne({ houseId: delHomeId })
  }
};
