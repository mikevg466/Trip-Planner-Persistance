const db = require('./_db');

const Place = require('./place');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Day = require('./day');

const DayRestaurant = db.define('day_restaurant', {
});
const DayActivity = db.define('day_activity', {
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

Day.belongsTo(Hotel);
Day.belongsToMany(Restaurant, {through: DayRestaurant});
Restaurant.belongsToMany(Day, {through: DayRestaurant});
Day.belongsToMany(Activity, {through: DayActivity});
Activity.belongsToMany(Day, {through: DayActivity});


module.exports = {
	db,
	Place,
	Hotel,
	Restaurant,
	Activity,
	Day
};
