const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.get('/', (req, res)=>{
    const categoryList = `
        SELECT * 
        FROM category 
        ORDER BY category_id`;

    db.query(categoryList, (err, result) => {
        if(err){
            throw err;
        }
        else{
            res.status(200).json(result.rows);
        }
    })
});

router.get('/:id', (req, res)=>{
    const filmByCategoryId = `
        SELECT * 
        FROM film 
        INNER JOIN film_category 
            ON film_category.film_id = film.film_id 
        WHERE category_id = $1`;

    db.query(filmByCategoryId, [req.params.id], (err, result) => {
        if(err){
            throw err;
        }
        else{
            res.status(200).json(result.rows);
            }
    })
});

module.exports = router;