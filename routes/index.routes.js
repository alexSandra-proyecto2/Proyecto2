const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


// to see raw data in your browser, just go on: http://localhost:3000/restaurants/api
router.get('/api', (req, res, next) => {
  Movie.find()
    .then(movieFromDB => res.status(200).json({
      movies: movieFromDB
    }))
    .catch(err => next(err))
});


// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({
    _id: movieId
  }, (error, movieFromDB) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({
        movie: movieFromDB
      });
    }
  });
});

module.exports = router;
