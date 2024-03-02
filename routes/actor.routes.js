const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.get('/', (req, res)=>{
    const actorList = `
        SELECT * 
        FROM actor 
        ORDER BY actor_id`;

    db.query(actorList, (err, result) => {
        if(err){
            throw err;
        }
        else {
            res.status(200).json(result.rows);
        }
    })
});


router.get('/:id', (req, res)=>{
    const actorById = `
        SELECT * 
        FROM actor 
        WHERE actor_id = $1`;
    
    db.query(actorById, [req.params.id], (err, result) => {
        if(err){
            throw err;
        }
        res.status(200).json(result.rows);
    })
});

module.exports = router;