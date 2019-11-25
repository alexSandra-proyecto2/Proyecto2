const express = require('express');
const router = express.Router();
//const Movie = require('../models/Movie.model');
const APIHandler = require('../services/moviesApi.service')
/* GET home page */
const moviesAPI = new APIHandler(`https://api.themoviedb.org/3`)


router.get('/:page', (req, res, next) => {
  //Movie.find()
  moviesAPI.getFullList(req.params.page++)
    .then(allmovies => {
      console.log(allmovies, "allmovies!")
      res.render('movies/listMovies', {
        movies: allmovies.results,
        page: req.params.page++
      })
    })
    .catch(err => console.log(err, "err full list"))
})

//moviesAPI.getFullList(page)
//axios.get("https: //api.themoviedb.org/3/"
// .then(response => {
//   const {
//     title,
//     overview
//   } = response.data
//   document.getElementsByClassName('title')[0].value = title
//   document.getElementsByClassName('overview')[0].value = overview

//     .catch(err => console.log(err))
// })



module.exports = router;