const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const MONGO_URL = "mongodb+srv://coder:coder@cluster0.7it96af.mongodb.net/?appName=Cluster0";


const mongoConnect = (callback) => {
    MongoClient.connect(MONGO_URL).then(client => {
        callback(client);
    }).catch(err => {
        console.log('Error while connecting to mongoDb', err)
    })
}

module.exports = mongoConnect;