// Core Modules
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtils');
const { error } = require('console');
const homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
    constructor(housename, location, description, price, rating, imageurl) {
        // this.id = Date.now().toString(),
        this.id = this.id,
            this.housename = housename,
            this.location = location,
            this.description = description,
            this.price = price,
            this.rating = rating,
            this.imageurl = imageurl
    }

    save() {
        Home.fetchAll((registeredHomes) => {
            if (this.id) {// edit case
                registeredHomes = registeredHomes.map(home => home.id === this.id ? this : home)
                fs.writeFile(homeDataPath, JSON.stringify(registeredHomes, null, 2), err => {
                    if (err) throw err
                    console.log("Home updated Successfully")
                })
            } else {// add home case
                this.id = Math.random().toString()
                registeredHomes.push(this)
                fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
                    if (err) throw err
                    console.log('Home added successfully')
                })
            }
        })
    }

    static fetchAll(callback) {
        const homeDataPath = path.join(rootDir, 'data', 'homes.json');
        fs.readFile(homeDataPath, (err, data) => {
            callback(!err ? JSON.parse(data) : [])
        })
    }

    static fetchById(id, callback) {
        Home.fetchAll((homes) => {
            const home = homes.find(h => h.id === id);
            callback(home);
        })
    }

}