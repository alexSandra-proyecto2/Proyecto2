const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User.model");
const Movie = require("../models/Movie.model");
const Event = require("../models/Event.model");
// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


//login
router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    "message": req.flash("error")
  });
});

//login
router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));


//signup
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});


//signup
router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  if (username === "" || password === "" || email === "") {
    res.render("auth/signup", {
      message: "Indicate username and password"
    });
    return;
  }

  User.findOne({
    email
  }, "email", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", {
        message: "The email already exists"
      });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email
    });

    newUser.save()
      .then(() => {
        res.redirect("/auth/login");
      })
      .catch(err => {
        res.render("auth/signup", {
          message: "Something went wrong"
        });
      })
  });
});


//logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});


//vista de perfil de usuario
router.get('/profile', ensureAuthenticated, (req, res) => {
  res.render('auth/profile', {
    user: req.user
  });
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login')
  }
}


//vista de peliculas pendientes dentro del perfil del usuario
router.get('/profile/pending', ensureAuthenticated, (req, res) => {
  User.findById(req.user._id)
    .populate("pending")
    .then(resData => {
      res.render('auth/pendingMovies', {
        pending: resData.pending,
        user: req.user
      })
    })
});

//vista de peliculas vistas dentro del perfil del usuario
router.get('/profile/seen', ensureAuthenticated, (req, res) => {
  User.findById(req.user._id)
    .populate('shown')
    .then(resData => {
      console.log(resData)
      res.render('auth/seenMovies', {
        shown: resData.shown,
        user: req.user
      })
    })
});


//vista de eventos dentro del perfil del usuario
router.get('/profile/events', ensureAuthenticated, (req, res) => {
  User.findById(req.user._id)
    .populate({
      path: 'events',
      populate: {
        path: 'assistants',
        model: 'User'
      }
    })
    .then(resData => {
      console.log(resData.events, "res de /profile/events")
      res.render('auth/events', {
        events: resData.events,
        user: req.user
      })
    })
});


//darme de baja de un evento
router.get('/profile/events/delete', (req, res) => {
  User.findByIdAndUpdate(req.user._id, {
      $pullAll: {
        "events": [req.query.eventId]
      }
    })
    .then(Event.findByIdAndUpdate(req.query.eventId, {
        $pullAll: {
          "assistants": [req.user._id]
        }
      })
      .then(res.redirect("/auth/profile/events"))
      .catch(err => console.log(err)))
    .catch(err => console.log(err))

})


//borra una pelicula de la vista de vistas
router.get('/profile/seen/delete', (req, res) => {
  console.log("la query", req.query.movieId, "el user", req.user._id)
  User.findByIdAndUpdate(req.user._id, {
      $pullAll: {
        "shown": [req.query.movieId]
      }
    })
    .then(res.redirect("/auth/profile/seen"))
    .catch(err => console.log(err))
})

//borrar una pelicula de la vista de pendientes y añadirla en vistas
router.get('/profile/pending/delete', (req, res) => {
  console.log("la query", req.query.movieId, "el user", req.user._id)
  User.findByIdAndUpdate(req.user._id, {
      $pullAll: {
        "pending": [req.query.movieId]
      },
      $push: {
        shown: req.query.movieId
      }
    })
    .then(res.redirect("/auth/profile/pending"))
    .catch(err => console.log(err))
})

//borrar una pelicula de la vista de pendientes
router.get('/profile/pending/deleteFromPending', (req, res) => {
  console.log("la query", req.query.movieId, "el user", req.user._id)
  User.findByIdAndUpdate(req.user._id, {
      $pullAll: {
        "pending": [req.query.movieId]
      }
    })
    .then(res.redirect("/auth/profile/pending"))
    .catch(err => console.log(err))
})


module.exports = router;