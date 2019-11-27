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
      console.log('holiiiiii')
      res.render('events/listEvents', {
        event: allevents
      })
    })
});



router.get('/add', (req, res, next) => {
  res.render('events/addEvent');
});


router.post('/add', (req, res) => {
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


router.get('/edit', (req, res) => {
  const eventId = req.query.eventId
  Event.findById(eventId)
    .then(theEvent => res.render('events/editEvent', theEvent))
    .catch(err => console.log('error!!', err))
})


router.post('/edit', (req, res) => {
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


router.get('/delete', (req, res) => {
  Event.findByIdAndDelete(req.query.eventId)
    .then(() => res.redirect('/events'))
    .catch(err => console.log(err))
})

module.exports = router;