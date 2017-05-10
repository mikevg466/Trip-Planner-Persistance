const router = require('express').Router();
const Activity = require('../models').Activity;

module.exports = router;

router.get('/', (req, res, next) => {
  Activity.findAll()
  .then(activitiesArr => {
    res.json(activitiesArr);
  })
  .catch(next);
})
