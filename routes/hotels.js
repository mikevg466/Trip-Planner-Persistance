var router = require('express').Router();
var Hotel = require('../models').Hotel;
module.exports = router;

router.get('/', (req, res, next) => {
  Hotel.findAll()
  .then(hotelsArr => {
    res.json(hotelsArr);
  })
  .catch(next);
})
