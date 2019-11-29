const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');
const Event = require('../models/Event.model');
/* GET home page */


//pagina de inicio
router.get('/', (req, res, next) => {
  res.render('index', {
    user: req.user
  });
});

router.get('/api/events', (req, res, next) => {
  Event.find()
    .then(eventFromDB => res.status(200).json({
      event: eventFromDB
    }))
    .catch(err => next(err))
});


//api para los eventos
router.get('/api/:id', (req, res, next) => {
  let eventId = req.params.id
  Event.findOne({
    _id: eventId
  }, (error, eventFromDB) => {
    if (error) {
      next(error)
    } else {
      res.status(200).json({
        event: eventFromDB
      });
    }
  });
});


router.get('/api', (req, res, next) => {
  Movie.find()
    .then(movieFromDB => res.status(200).json({
      movies: movieFromDB
    }))
    .catch(err => next(err))
});



//api para las películas
router.get('/api/:id', (req, res, next) => {
  let movieId = req.params.id;
  let eventId = req.params.id
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
  })

});


module.exports = router;