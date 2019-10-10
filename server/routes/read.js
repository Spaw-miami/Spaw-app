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
	User.findById(userID)
		.populate({ path: 'reviews', populate: { path: 'author' } })
		.populate({ path: 'reviews', populate: { path: 'groomer' } })
		.populate('dogs')
		// .populate('reviews')
		.then((user) => {
			res.json(user);
		});
});

router.get('/groomer', (req, res, next) => {
	const { groomerID } = req.body;
	Groomer.findById(groomerID)
		.populate({ path: 'reviews', populate: { path: 'author' } })
		.populate('weeks')
		.populate('pricing')
		.then((groomer) => {
			res.json(groomer);
		});
});

module.exports = router;
