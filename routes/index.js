const express = require('express');
const filmRouter = require('./film.routes');
const categoryRouter = require('./category.routes');
const actorRouter = require('./actor.routes');

const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Welcome to dvdrental API");
});

router.use('/films', filmRouter);

router.use('/categories', categoryRouter);

router.use('/actors', actorRouter);

module.exports = router;
