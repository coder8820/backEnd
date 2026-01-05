// Core Modules
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtils');
const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json');


module.exports = class Favourite {

    static addToFavourite(homeId, callback) {
        Favourite.getFavourite((favourite) => {
            registeredHomes.push(this)
            if (favourite.include(homeId)) {
                alert('Home is already marked')
            } else {
                favourite.push(homeId)
                fs.writeFile(favouriteDataPath, JSON.stringify(favourite), (callback))
            }

            // const homeDataPath = path.join(rootDir, 'data', 'homes.json');

        })

    }

    static getFavourite(callback) {
        fs.readFile(favouriteDataPath, (err, data) => {
            callback(!err ? JSON.parse(data) : [])
        })
    }

}
