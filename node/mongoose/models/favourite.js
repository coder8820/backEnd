const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtil");

module.exports = class Favourite {

  constructor(houseId) {
    this.houseId = new ObjectId(houseId);
  }

  save() {
    const db = getDB();
    return db.collection('favourites').findOne({ houseId: this.houseId }).then(exsistingFav => {
      if (!exsistingFav) {
        return db.collection('favourites').insertOne(this)
      }
      return new Promise.resolve();
    })
  }

  static getFavourites() {
    const db = getDB();
    return db.collection('favourites').find().toArray()
  }

  static deleteById(delHomeId) {
    const db = getDB();
    return db.collection('favourites').deleteOne({ houseId: new ObjectId(delHomeId) })
  }
};
