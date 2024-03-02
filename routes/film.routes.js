const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.get('/', (req, res)=>{
    const filmList = `
        SELECT * 
        FROM film 
        ORDER BY film_id`;

    db.query(filmList, (err, result) => {
        if(err){
            throw err;
        }
        else{
            res.status(200).json(result.rows);
        }
    })
});


router.get('/:id', (req, res)=>{
    const filmById = `
        SELECT * 
        FROM film 
        WHERE film_id = $1`;
    
    db.query(filmById, [req.params.id], (err, result) => {
        if(err){
            throw err;
        }
        else{
            res.status(200).json(result.rows);
        }
    })
});

module.exports = router;