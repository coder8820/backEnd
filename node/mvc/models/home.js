// Core Modules
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtils');
const { error } = require('console');

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
        registeredHomes.push(this);
        const homeDataPath = path.join(rootDir,'data','homes.json');
        fs.writeFile(homeDataPath, JSON.stringify(registeredHomes),(err) =>{
            if(err) throw err
            console.log('file written successfully')
        })
    }

    static fetchAll() {
        return registeredHomes
    }

}