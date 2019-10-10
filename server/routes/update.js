const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Groomer = require('../models/Groomer');
const Dog = require('../models/Dog');
const Review = require('../models/Review');
const Week = require('../models/Week');
const Price = require('../models/Price');

const bcrypt = require('bcrypt');
const bcryptSalt = 10;
// Route to add a country
router.post('/user', (req, res, next) => {
	// information passed through the body of the front end
	const { userID, username, firstName, lastName, profilePic, email, phoneNumber, address } = req.body;
	// prevents update if body does not contain all fields
	if (!username || !firstName || !lastName || !profilePic || !email || !phoneNumber || !address) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	// find user and update its data
	User.findByIdAndUpdate(userID, {
		username,
		firstName,
		lastName,
		profilePic,
		email,
		phoneNumber,
		address
	})
		.then((userSaved) => {
			// LOG IN THIS USER
			// "req.logIn()" is a Passport method that calls "serializeUser()"
			// (that saves the USER ID in the session)
			req.logIn(userSaved, () => {
				// hide "encryptedPassword" before sending the JSON (it's a security risk)
				userSaved.password = undefined;
				res.json(userSaved);
			});
		})
		.catch((err) => next(err));
});

router.post('/groomer', (req, res, next) => {
	// info taken from post request
	const {
		groomerID,
		username,
		firstName,
		about,
		lastName,
		profilePic,
		startingTime,
		endTime,
		email,
		phoneNumber,
		address
	} = req.body;
	// prevents post update if any field is left empty
	if (
		!groomerID ||
		!username ||
		!firstName ||
		!lastName ||
		!profilePic ||
		!email ||
		!phoneNumber ||
		!address ||
		!startingTime ||
		!endTime
	) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	// finds groomer and updates
	Groomer.findByIdAndUpdate(groomerID, {
		username,
		firstName,
		about,
		lastName,
		profilePic,
		email,
		phoneNumber,
		startingTime,
		endTime,
		address
	})
		// makes sure groomer is kept logged
		.then((groomerSaved) => {
			// LOG IN THIS USER
			// "req.logIn()" is a Passport method that calls "serializeUser()"
			// (that saves the USER ID in the session)
			req.logIn(groomerSaved, () => {
				// hide "encryptedPassword" before sending the JSON (it's a security risk)
				groomerSaved.password = undefined;
				res.json(groomerSaved);
			});
		})
		.catch((err) => next(err));
});

router.post('/prices', (req, res, next) => {
	// prices info
	const { priceID, groomerID, small, medium, large } = req.body;
	// required fields
	if (!priceID || !groomerID || !small || !medium || !large) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	// search with id passed and update
	Price.findByIdAndUpdate(priceID, {
		small,
		medium,
		large
	}).then((price) => {
		// render info as json file
		res.json(price);
	});
});

router.post('/dog', (req, res, next) => {
	// info passed
	const { dogID, name, picture, breed, size, age, userId } = req.body;
	// required fields
	if (!dogID || !name || !picture || !breed || !size || !age) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	// search and update
	Dog.findByIdAndUpdate(dogID, { name, picture, breed, size, age })
		.then((dogSaved) => {
			res.json(dogSaved);
		})
		.catch((err) => next(err));
});

router.post('/review', (req, res, next) => {
	const { reviewID, starNumber, content, date, groomer, author, dog } = req.body;
	if (!reviewID || !starNumber || !content || !date || !groomer || !author || !dog) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	Review.findByIdAndUpdate(reviewID, { starNumber, content, date, groomer, author, dog })
		.then((reviewSaved) => {
			res.json(reviewSaved);
		})
		.catch((err) => next(err));
});

module.exports = router;
