const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('events/listEvents');
});

router.get('/add', (req, res, next) => {
  res.render('events/addEvent');
});

module.exports = router;