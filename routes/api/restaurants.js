var router = require('express').Router();
var Restaurant = require('../../models').Restaurant;
module.exports = router;

router.get('/', (req, res, next) => {
  Restaurant.findAll()
  .then(restaurantsArr => {
    res.json(restaurantsArr);
  })
  .catch(next);
})
