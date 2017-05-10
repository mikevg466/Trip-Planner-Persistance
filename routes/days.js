var router = require('express').Router();
var Day = require('../models').Day;
var Hotel = require('../models').Hotel
module.exports = router;

router.get('/', (req, res, next) => {
  Day.findAll()
  .then(daysArr => {
    res.json(daysArr);
  })
  .catch(next);
})

router.get('/:id', (req, res, next) => {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then(dayFound => {
    res.json(dayFound)
  })
  .catch(next);
})

router.post('/:id/hotel', (req, res, next) => {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then(dayFound => {
    Hotel.findOne({
      where: {
        id: req.body.id
      }
    })
    .then(hotelFound => {
      dayFound.setHotel(hotelFound);
    })
  })
  .catch(next);
})

//START HERE TOMORROW ON ACTIVITY AND RESTAURANT ROUTES

router.post('/', (req, res, next) => {
  Day.create(req.body)
  .then(dayCreated => {
    res.status(201).send('Day created successfully');
  })
  .catch(next);
})

router.delete('/:id', (req, res, next) => {
  Day.destroy({
    where: {
      number: req.params.id
    }
  })
  .then(dayDeleted => {
    res.status(202).send('Day has been deleted');
  })
  .catch(next);
})
