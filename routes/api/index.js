var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurant = require('../../models').Restaurant;
var Activity = require('../../models').Activity;

router.use('/hotels', require('./hotels'));
router.use('/restaurants', require('./restaurants'));
router.use('/activities', require('./activities'));
router.use('/days', require('./days'));

module.exports = router;
