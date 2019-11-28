const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User.model");
const Movie = require("../models/Movie.model");
const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;



router.get("/login", (req, res, next) => {
  res.render("auth/login", {
    "message": req.flash("error")
  });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

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

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

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

router.get('/profile/pending', ensureAuthenticated, (req, res) => {
  User.findById(req.user._id)
    .populate("pending")
    .then(resData => {
      res.render('auth/pendingMovies', {
        pending: resData.pending
      })
    })
});


router.get('/profile/seen', ensureAuthenticated, (req, res) => {
  User.findById(req.user._id)
    .populate('shown')
    .then(resData => {
      console.log(resData)
      res.render('auth/seenMovies', {
        shown: resData.shown
      })
    })
});


router.get('/profile/events', ensureAuthenticated, (req, res) => {
  User.findById(req.user._id)
    .populate('events')
    .then(resData => {
      console.log(resData)
      res.render('auth/events', {
        events: resData.events
      })
    })
});


//falta que se borre del shown"""
router.get('profile/seen/delete', (req, res) => {
  Movie.find(req.query.movieId)
    .then(res => {
      console.log(res)
    })
  // User.shown.findOneAndDelete()
  //   .then(() => res.redirect('/auth/profile/seen'))
  //   .catch(err => console.log(err))
})

module.exports = router;