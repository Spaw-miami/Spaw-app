const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Groomer = require('../models/Groomer');
const Dog = require('../models/Dog');
const Review = require('../models/Review');
const Week = require('../models/Week');
const Price = require('../models/Price');

// Route to add a country
router.get('/user', (req, res, next) => {
	const { userID } = req.body;
	User.findByIdAndDelete(userID).then((user) => {
		res.json(user);
	});
});

router.get('/groomer', (req, res, next) => {
	const { groomerID } = req.body;
	Groomer.findByIdAndDelete(groomerID).then((groomer) => {
		res.json(groomer);
	});
});

router.get('/dog', (req, res, next) => {
	const { dogID } = req.body;
	Dog.findByIdAndDelete(dogID).then((dog) => {
		res.json(dog);
	});
});

router.get('/review', (req, res, next) => {
	const { reviewID } = req.body;
	Review.findByIdAndDelete(reviewID).then((review) => {
		res.json(review);
	});
});

module.exports = router;
