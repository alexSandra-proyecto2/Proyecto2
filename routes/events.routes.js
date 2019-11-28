const express = require('express');
const router = express.Router();
const Event = require('../models/Event.model');
const User = require('../models/User.model');
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

router.get('/', (req, res, next) => {
  Event.find()
    .populate("assistants")
    .then(allevents => {
      console.log(allevents)
      res.render('events/listEvents', {
        event: allevents
      })
    })
});



router.get('/add', ensureAuthenticated, (req, res, next) => {
  res.render('events/addEvent');
});


router.post('/add', ensureAuthenticated, (req, res) => {
  const location = req.body.location
  const name = req.body.name
  const date = req.body.date
  const description = req.body.description
  const type = req.body.type
  const address = req.body.address
  console.log(req.body)

  let creator = req.user.username

  Event.create({
      name,
      date,
      description,
      creator,
      type,
      location,
      address
    })
    .then(x => {
      console.log(x)
      res.json(x)
    })
    .catch(err => 'error: ' + err)
})


router.get('/edit', ensureAuthenticated, (req, res) => {
  const eventId = req.query.eventId
  Event.findById(eventId)
    .then(theEvent => res.render('events/editEvent', theEvent))
    .catch(err => console.log('error!!', err))
})


router.post('/edit', ensureAuthenticated, (req, res) => {
  console.log(req.body, "req.bdy en edit")
  const location = req.body.location
  const name = req.body.name
  const date = req.body.date
  const description = req.body.description
  const type = req.body.type
  const address = req.body.address

  Event.findByIdAndUpdate(req.body.eventId, {
      name,
      date,
      description,
      type,
      location,
      address
    })
    .then(x => {
      console.log(x, "update")
      // res.json(x)
    })
    .catch(err => console.log(err))
})


router.get('/delete', ensureAuthenticated, (req, res) => {
  Event.findByIdAndDelete(req.query.eventId)
    .then(() => res.redirect('/events'))
    .catch(err => console.log(err))
})




router.get('/join', ensureAuthenticated, (req, res, next) => {
  console.log(req.query.eventId)
  User.findOneAndUpdate({
      _id: req.user._id,
      events: {
        '$ne': req.query.eventId
      }
    }, {
      $push: {
        events: req.query.eventId
      }
    }, {
      new: true
    })
    .then(info => {
      console.log("---------------------")
      console.log(" la info", info)
    })
  Event.findOneAndUpdate({
    _id: req.query.eventId
  }, {
    $push: {
      assistants: req.user._id
    }
  }, {
    new: true
  }).then(info => {
    console.log("---------------------")
    console.log(" la info", info)
  })
})

module.exports = router;