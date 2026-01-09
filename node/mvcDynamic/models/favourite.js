// Core Modules
const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/pathUtils');
const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {

    static addToFavourite(homeData, callback) {
        Favourite.getFavourite((favourite) => {
            // Check if already in favorites using homeData.id
            const exists = favourite.some(fav => fav.id === homeData.id);

            if (exists) {
                return callback({ error: 'Home is already marked as favorite' }, null);
            }

            // Add the complete home data (not just ID)
            favourite.push(homeData);

            // Write to file with proper error handling
            fs.writeFile(favouriteDataPath, JSON.stringify(favourite, null, 2), (err) => {
                if (err) {
                    return callback(err, null);
                }
                callback(null, { success: 'Added to favorites' });
            });
        });
    }

    static getFavourite(callback) {
        fs.readFile(favouriteDataPath, (err, data) => {
            if (err) {
                // Create file if it doesn't exist
                fs.writeFile(favouriteDataPath, JSON.stringify([]), (writeErr) => {
                    callback(!writeErr ? [] : []);
                });
            } else {
                try {
                    callback(JSON.parse(data));
                } catch (parseErr) {
                    callback([]);
                }
            }
        });
    }

    static removeFavourite(homeId, callback) {
        Favourite.getFavourite((favourites) => {
            const filtered = favourites.filter(fav => fav.id !== homeId);
            fs.writeFile(favouriteDataPath, JSON.stringify(filtered, null, 2), (err) => {
                if (err) {
                    return callback(err, null);
                }
                callback(null, { success: 'Removed from favorites' });
            });
        });
    }

    // static deleteById(delHomeId, callback) {
    //     Favourite.getFavourite((homeIds) => {
    //         homeIds = homeIds.filter(id => id.homeIds !== delHomeId);
    //         fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback)
    //     })
    // }


}
