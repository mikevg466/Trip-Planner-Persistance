var router = require('express').Router();
var Day = require('../models').Day;
var Hotel = require('../models').Hotel
var Activity = require('../models').Activity
var Restaurant = require('../models').Restaurant
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

//set a hotel
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

//remove a hotel
router.delete('/:id/hotel', (req, res, next) => {
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
      dayFound.setHotel(null);
    })
  })
  .catch(next);
})

//add activities
router.post('/:id/activity', (req, res, next) => {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then(dayFound => {
    Activity.findOne({
      where: {
        id: req.body.id
      }
    })
    .then(activityFound => {
      dayFound.addActivity(activityFound);
    })
  })
  .catch(next);
})

//remove activities
router.delete('/:id/activity', (req, res, next) => {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then(dayFound => {
    Activity.findOne({
      where: {
        id: req.body.id
      }
    })
    .then(activityFound => {
      dayFound.removeActivity(activityFound);
    })
  })
  .catch(next);
})

//add restaurants
router.post('/:id/restaurant', (req, res, next) => {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then(dayFound => {
    Restaurant.findOne({
      where: {
        id: req.body.id
      }
    })
    .then(restaurantFound => {
      dayFound.addRestaurant(restaurantFound);
    })
  })
  .catch(next);
})

//remove restaurants
router.delete('/:id/restaurant', (req, res, next) => {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then(dayFound => {
    Restaurant.findOne({
      where: {
        id: req.body.id
      }
    })
    .then(restaurantFound => {
      dayFound.removeRestaurant(restaurantFound);
    })
  })
  .catch(next);
})


router.post('/', (req, res, next) => {
  Day.findOrCreate({
    where: {number: Number(req.body.number)},
    defaults: {number: Number(req.body.number)}
  })
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
