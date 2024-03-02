const Pool = require('pg').Pool;
const dbConfig = require('../database.json');

const pool = new Pool(dbConfig.dvdrental);

pool.connect((err) =>{
    if(err){
        throw err;
    }
    else{
        console.log('Connected to the database successfully.')
    }
});

module.exports = pool;