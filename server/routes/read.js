const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Groomer = require('../models/Groomer');
const Dog = require('../models/Dog');
const Review = require('../models/Review');
const Week = require('../models/Week');
const Price = require('../models/Price');

// Route to add a country
router.get('/user/:id', (req, res, next) => {
	let userID = req.params.id;
	User.findById(userID)
		.populate({ path: 'reviews', populate: { path: 'author' } })
		.populate({ path: 'reviews', populate: { path: 'groomer' } })
		.populate('dogs')
		// .populate('reviews')
		.then((user) => {
			user.password = undefined;
			res.json(user);
		});
});

router.get('/groomer/:id', (req, res, next) => {
	let groomerID = req.params.id;
	Groomer.findById(groomerID)
		.populate({ path: 'reviews', populate: { path: 'author' } })
		.populate({ path: 'weeks', populate: { path: 'Monday' } })
		.populate({ path: 'weeks', populate: { path: 'Tuesday' } })
		.populate({ path: 'weeks', populate: { path: 'Wednesday' } })
		.populate({ path: 'weeks', populate: { path: 'Thursday' } })
		.populate({ path: 'weeks', populate: { path: 'Friday' } })
		.populate({ path: 'weeks', populate: { path: 'Saturday' } })
		.populate({ path: 'weeks', populate: { path: 'Sunday' } })
		.populate('pricing')
		.then((groomer) => {
			res.json(groomer);
		});
});


router.get('/getUser/something/please', (req, res, next) => {
	console.log('GETTING USER?????????????????', req.user)
	res.json({ user: req.user })
})

module.exports = router;
