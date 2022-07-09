const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // your MySQL password
        password: '42jk8doi!3@$J',
        database: 'election'
    },
    console.log("Connected to the election database.")
);

module.exports = db;