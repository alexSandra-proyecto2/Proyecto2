const express = require('express');
const router = express.Router();
const passport = require('passport');
const Movie = require('../models/Movie.model');
const User = require('../models/User.model');
const APIHandler = require('../services/moviesApi.service')
const moviesAPI = new APIHandler(`https://api.themoviedb.org/3`)
const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/auth/login')
  }
}


router.get('/add', ensureAuthenticated, (req, res, next) => {
  console.log("click")
  const movieId = req.query.movieId

  moviesAPI.getMovieByID(movieId)

    .then(lamovie => {
      console.log("----->", lamovie)

      Movie.create(lamovie)
        .then(themovie => {
          res.render('movies/addMovieLocation', {
            movie: themovie,
             user: req.user
          })
        })
        .catch(err => {
          Movie.findOne({
              id: movieId
            })
            .then(themovie => {
              res.render('movies/addMovieLocation', {
                movie: themovie, user: req.user
              })
            })

            .catch(err => console.log('error!!', err))
        })
      console.log({
        err
      })
    })
})


router.post('/add', ensureAuthenticated, (req, res) => {

  console.log(req.body, "soy el req body y no soy null")

  console.log(req.body.movieId)
  Movie.findOneAndUpdate({
      id: req.body.movieId
    }, {
      $push: {
        location: req.body.location
      }
    })
    .then(x => {
      res.json(x)
    })
    .catch(err => 'error: ' + err)
})


router.get('/pending', ensureAuthenticated, (req, res, next) => {
  const movieId = req.query.movieId

  moviesAPI.getMovieByID(movieId)
    .then(lamovie => {
      // console.log("----->", lamovie)
      // console.log(req.user.email)
      // console.log("la movie id", lamovie.id)
      Movie.findOneAndUpdate({
          id: lamovie.id
        }, lamovie, {
          upsert: true,
          new: true
        })
        .then(movieCreated => {
          console.log("*******", movieCreated, "la movie creade en db")

          User.findOneAndUpdate({
              email: req.user.email,
              pending: {
                '$ne': movieCreated._id
              }
            }, {
              $push: {
                pending: movieCreated._id
              }
            }, {
              new: true
            })
            .then(info => {
              console.log("---------------------")
              console.log(" la info", info)
            })
            .catch(err => 'error: ' + err)
        })
        .catch(err => console.log(err, "find and update"))


    })
    .catch(err => console.log(err, "getmovie from api"))

})


router.get('/shown', ensureAuthenticated, (req, res, next) => {
  const movieId = req.query.movieId
  moviesAPI.getMovieByID(movieId)
    .then(lamovie => {
      console.log("----->", lamovie)
      console.log("la movie id", lamovie.id)
      Movie.findOneAndUpdate({
          id: lamovie.id
        }, lamovie, {
          upsert: true,
          new: true
        })
        .then(movieCreated => {
          console.log("*******", movieCreated, "la movie creade en db")
          User.findOneAndUpdate({
              _id: req.user._id,
              shown: {
                '$ne': movieCreated._id
              }
            }, {
              $push: {
                shown: movieCreated._id
              }
            }, {
              new: true
            })
            .then(info => {
              // User.findOneAndRemove({
              //     pending: info.shown
              //   })
              //   .then()
              //   .catch()
              console.log("---------------------")
              console.log(" la info", info)
            })
            .catch(err => 'error: ' + err)
        })
        .catch(err => console.log(err, "find and update"))


    })
    .catch(err => console.log(err, "getmovie from api"))
})


//Yo la ultima, que si no entro siempre
router.get('/:page', (req, res, next) => {
  moviesAPI.getFullList(req.params.page++)
    .then(allmovies => {
      res.render('movies/listMovies', {
        movies: allmovies.results,
        page: req.params.page++,
         user: req.user
      })
    })
    .catch(err => console.log(err, "err full list"))
})



module.exports = router;