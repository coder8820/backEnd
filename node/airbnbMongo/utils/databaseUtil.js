const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://coder:coder@cluster0.7it96af.mongodb.net/?appName=Cluster0";

let _db;

const mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL).then(client => {
        callback(client);
        _db = client.db('airbnb');
    }).catch(err => {
        console.log('Error while connecting to mongoDb', err)
    })
}

const getDb = () => {
    if (!_db) {
        throw new Error('Mongo not connected')
    }
    return _db
}


module.exports = mongoConnect;
exports.getDb = getDb;