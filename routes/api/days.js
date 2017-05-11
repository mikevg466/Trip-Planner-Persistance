const router = require('express').Router();
const Day = require('../../models').Day;
const Restaurant = require('../../models').Restaurant
const Activity = require('../../models').Activity
const Hotel = require('../../models').Hotel
module.exports = router;

router.param('id', (req, res, next, id) => {
  Day.findOne({
    where: {
      number: id
    }
  })
  .then(dayFound => {
    req.day = dayFound;
    next()
  })
  .catch(next);
});

router.get('/', (req, res, next) => {
  Day.findAll()
  .then(daysArr => {
    res.json(daysArr);
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

router.get('/:id', (req, res, next) => {
  res.json(req.day);
})


router.delete('/:id', (req, res, next) => {
  req.day.destroy()
  .then(dayDeleted => {
    res.status(202).send('Day has been deleted');
  })
  .catch(next);
})


// restaurants

// get restaurants for day
router.get('/:id/restaurant', (req, res, next) => {
  req.day.getRestaurants()
  .then((restaurantsFound) => res.json(restaurantsFound));
});

//add restaurants
router.post('/:id/restaurant', (req, res, next) => {
  Restaurant.findOne({
    where: {
      id: req.body.id
    }
  })
  .then(restaurantFound => {
    req.day.addRestaurant(restaurantFound);
  })
  .catch(next);
});

//remove restaurants
router.delete('/:id/restaurant', (req, res, next) => {
  Restaurant.findOne({
    where: {
      id: req.body.id
    }
  })
  .then(restaurantFound => {
    req.day.removeRestaurant(restaurantFound);
  })
  .catch(next);
});

// Activity

// get activities for day
router.get('/:id/activity', (req, res, next) => {
  req.day.getActivities()
  .then((activitiesFound) => res.json(activitiesFound))
  .catch(next);
});

//add activities
router.post('/:id/activity', (req, res, next) => {
  Activity.findOne({
    where: {
      id: req.body.id
    }
  })
  .then(activityFound => {
    req.day.addActivity(activityFound);
  })
  .catch(next);
})

//remove activities
router.delete('/:id/activity', (req, res, next) => {
  Activity.findOne({
    where: {
      id: req.body.id
    }
  })
  .then(activityFound => {
    req.day.removeActivity(activityFound);
  })
  .catch(next);
})


// Hotel

// get hotels for day
router.get('/:id/hotel', (req, res, next) => {
  req.day.getHotel()
  .then((hotelFound) => res.json(hotelFound))
  .catch(next);
});

//set a hotel
router.post('/:id/hotel', (req, res, next) => {
  Hotel.findOne({
    where: {
      id: req.body.id
    }
  })
  .then(hotelFound => {
    req.day.setHotel(hotelFound);
  })
  .catch(next);
})

//remove a hotel
router.delete('/:id/hotel', (req, res, next) => {
  Hotel.findOne({
    where: {
      id: req.body.id
    }
  })
  .then(hotelFound => {
    req.day.setHotel(null);
  })
  .catch(next);
})
