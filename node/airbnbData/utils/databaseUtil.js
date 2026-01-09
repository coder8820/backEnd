const mysql = require("mysql2")

const pool = mysql.createPool({
    host: 'localhost',
    user: 'coder',
    password: 'coder',
    database: 'airbnb'
})

module.exports = pool.promise();