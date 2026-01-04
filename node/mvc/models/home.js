// Core Modules
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtils');
const { error } = require('console');

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
       Home.fetchAll((registeredHomes) => {registeredHomes.push(this)
        const homeDataPath = path.join(rootDir,'data','homes.json');
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes),(err) =>{
            if(err) throw err
            console.log('file written successfully')
        })})
    }

    static fetchAll(callback) {
        const homeDataPath = path.join(rootDir,'data','homes.json');
        fs.readFile(homeDataPath,(err,data) =>{
            console.log(err, data)
            callback(!err ? JSON.parse(data): [])
        })
    }

}