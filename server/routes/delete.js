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
	User.findById(userID).then((user) => {
		res.json(user);
	});
});

router.post('/groomer', (req, res, next) => {
	const { username, password, firstName, lastName, profilePic, email, phoneNumber, address } = req.body;
});

router.post('/prices', (req, res, next) => {
	const { username, password, firstName, lastName, profilePic, email, phoneNumber, address } = req.body;
});

router.post('/dog', (req, res, next) => {
	const { username, password, firstName, lastName, profilePic, email, phoneNumber, address } = req.body;
});

router.post('/review', (req, res, next) => {
	const { username, password, firstName, lastName, profilePic, email, phoneNumber, address } = req.body;
});

module.exports = router;
