const express = require('express');
const router = express.Router();
const Event = require('../models/Event.model');

/* GET home page */
// router.get('/', (req, res, next) => {
//   res.render('events/listEvents');
// });

router.get('/', (req, res, next) => {
  Event.find()
    .then(allevents => {
      res.render('events/listEvents', {
        event: allevents
      })
    })
});



router.get('/add', (req, res, next) => {
  res.render('events/addEvent');
});
router.post('/add', (req, res) => {
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  }
  const {
    name,
    date,
    description,
    type,
  } = req.body

  let creator = req.user.username

  Event.create({
      name,
      date,
      description,
      creator,
      type,
      location
    })
    .then(x => res.redirect('/events'))
    .catch(err => 'error: ' + err)
})


router.get('/edit', (req, res) => {
  const eventId = req.query.eventId
  Event.findById(eventId)
    .then(theEvent => res.render('events/editEvent', theEvent))
    .catch(err => console.log('error!!', err))
})


router.post('/edit', (req, res) => {
  const {
    name,
    date,
    description,
    type
  } = req.body

  Event.findByIdAndUpdate(req.query.eventId, {
      name,
      date,
      description,
      type
    })
    .then(() => res.redirect(`/events`))
    .catch(err => console.log(err))
})


router.get('/delete', (req, res) => {
  Event.findByIdAndDelete(req.query.eventId)
    .then(() => res.redirect('/events'))
    .catch(err => console.log(err))
})

module.exports = router;