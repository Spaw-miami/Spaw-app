const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Grommer = require('../models/Grommer');
const Dog = require('../models/Dog');
const Review = require('../models/Review');
const Week = require('../models/Week');

const bcrypt = require('bcrypt');
const bcryptSalt = 10;
// Route to add a country
router.post('/user', (req, res, next) => {
	const { username, password, firstName, lastName, profilePic, email, phoneNumber, address } = req.body;
	if (!username || !password || !firstName || !lastName || !profilePic || !email || !phoneNumber || !address) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	User.findOne({ username })
		.then((userDoc) => {
			if (userDoc !== null) {
				res.status(409).json({ message: 'The username already exists' });
				return;
			}
			const salt = bcrypt.genSaltSync(bcryptSalt);
			const hashPass = bcrypt.hashSync(password, salt);
			const newUser = new User({
				username,
				password: hashPass,
				firstName,
				lastName,
				profilePic,
				email,
				phoneNumber,
				address
			});
			return newUser.save();
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

router.post('/grommer', (req, res, next) => {
	const {
		username,
		password,
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

	let startArr = startingTime.split(':');
	let endArr = endTime.split(':');
	let start = 0;
	let end = 0;

	if (startArr[1].includes('pm')) {
		start += Number(startArr[0]) + 12;
	} else {
		start += Number(startArr[0]);
	}
	if (endArr[1].includes('pm')) {
		end += Number(endArr[0]) + 12;
	} else {
		end += Number(endArr[0]);
	}
	let timeSlotsArr = [];
	let hoursWorking = end - start;

	if (
		!username ||
		!password ||
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
	Grommer.findOne({ username })
		.then((grommer) => {
			if (grommer !== null) {
				res.status(409).json({ message: 'The username already exists' });
				return;
			}
			const salt = bcrypt.genSaltSync(bcryptSalt);
			const hashPass = bcrypt.hashSync(password, salt);
			const newGrommer = new Grommer({
				username,
				password: hashPass,
				firstName,
				about,
				lastName,
				profilePic,
				email,
				phoneNumber,
				startingTime,
				endTime,
				address
			});
			return newGrommer.save();
		})
		.then((grommerSaved) => {
			for (let i = 1; i <= 52; i++) {
				newWeek = new Week({
					Monday: [],
					Tuesday: [],
					Wednesday: [],
					Thursday: [],
					Friday: [],
					Saturday: [],
					Sunday: []
				});
			}

			// LOG IN THIS USER
			// "req.logIn()" is a Passport method that calls "serializeUser()"
			// (that saves the USER ID in the session)
			req.logIn(grommerSaved, () => {
				// hide "encryptedPassword" before sending the JSON (it's a security risk)
				grommerSaved.password = undefined;
				res.json(grommerSaved);
			});
		})
		.catch((err) => next(err));
});

router.post('/dog', (req, res, next) => {
	const { name, picture, breed, size, age, userId } = req.body;
	if (!name || !picture || !breed || !size || !age) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	User.findOne({ name })
		.then((dog) => {
			const newDog = new Dog({ name, picture, breed, size, age });
			return newDog.save();
		})
		.then((dogSaved) => {
			User.findByIdAndUpdate(userId, { $push: { dogs: dogSaved._id } }).then((user) => {
				console.log(user);
			});
			res.json(dogSaved);
		})
		.catch((err) => next(err));
});

router.post('/review', (req, res, next) => {
	const { starNumber, content, date, grommer, author, dog } = req.body;
	if (!starNumber || !content || !date || !grommer || !author || !dog) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	User.findOne({ date })
		.then((doggo) => {
			const newReview = new Review({ starNumber, content, date, grommer, author, dog });
			return newReview.save();
		})
		.then((reviewSaved) => {
			// LOG IN THIS USER
			User.findByIdAndUpdate(author, { $push: { reviews: reviewSaved._id } }).then((user) => {});
			Grommer.findByIdAndUpdate(grommer, { $push: { reviews: reviewSaved._id } }).then((grommer) => {});

			res.json(reviewSaved);
		})
		.catch((err) => next(err));
});

module.exports = router;
