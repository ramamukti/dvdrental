const fs = require('fs');
const db = require('../config/db');

const sql = fs.readFileSync("./seeders/seed.sql", "utf-8");

db.query(sql, (err) => {
    if(err){
        throw err;
    }
    else {
        console.log('Data inserted successfully.');
    }
});

