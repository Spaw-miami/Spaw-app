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
	const { username, password, firstName, lastName, profilePic, email, phoneNumber, address } = req.body;
	if (!username || !password || !firstName || !lastName || !profilePic || !email || !phoneNumber || !address) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	User.findOne({ username }).then((userDoc) => {
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
	});
});

router.post('/groomer', (req, res, next) => {
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
	Groomer.findOne({ username })
		.then((groomer) => {
			if (groomer !== null) {
				res.status(409).json({ message: 'The username already exists' });
				return;
			}
			const salt = bcrypt.genSaltSync(bcryptSalt);
			const hashPass = bcrypt.hashSync(password, salt);
			const newGroomer = new Groomer({
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
			return newGroomer.save();
		})
		.then((groomerSaved) => {
			let t = 0;
			let timeArr = [];
			let sArr = startingTime.split(':');
			let eArr = endTime.split(':');

			t -= sArr[1].includes('pm') ? Number(sArr[0]) - 12 : Number(sArr[0]);
			t += eArr[1].includes('pm') ? Number(eArr[0]) + 12 : Number(eArr[0]);

			for (let i = 0; i < t; i++) {
				timeArr.push({
					clientID: 'String',
					groomerID: 'String',
					time: sArr.join(':')
				});

				sArr[0] = Number(sArr[0]) + 1;

				if (Number(sArr[0]) % 12 == 0) {
					sArr[1] = '00 pm';
					sArr[0] = Number(sArr[0]) % 12;
				}
			}

			for (let i = 1; i <= 52; i++) {
				newWeek = new Week({
					Monday: timeArr,
					Tuesday: timeArr,
					Wednesday: timeArr,
					Thursday: timeArr,
					Friday: timeArr,
					Saturday: timeArr,
					Sunday: timeArr,
					weekNumber: i
				});
				newWeek.save().then((weeksaved) => {
					Groomer.findByIdAndUpdate(groomerSaved._id, {
						$push: { weeks: weeksaved._id }
					}).then((groomer) => {
						console.log(groomer);
					});
				});
			}
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
	const { groomerID, small, medium, large } = req.body;
	if (!groomerID || !small || !medium || !large) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	const newPrice = new Price({ small, medium, large });
	newPrice.save().then((price) => {
		console.log(price._id);
		Groomer.findByIdAndUpdate(groomerID, {
			$push: { pricing: price._id }
		}).then((groomer) => {
			console.log(groomer);
		});
		res.json(price);
	});
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
	const { starNumber, content, date, groomer, author, dog } = req.body;
	if (!starNumber || !content || !date || !groomer || !author || !dog) {
		res.status(400).json({ message: '{Please fill all fields}' });
		return;
	}
	User.findOne({ date })
		.then((doggo) => {
			const newReview = new Review({ starNumber, content, date, groomer, author, dog });
			return newReview.save();
		})
		.then((reviewSaved) => {
			// LOG IN THIS USER
			User.findByIdAndUpdate(author, { $push: { reviews: reviewSaved._id } }).then((user) => {});
			Groomer.findByIdAndUpdate(groomer, { $push: { reviews: reviewSaved._id } }).then((groomer) => {});

			res.json(reviewSaved);
		})
		.catch((err) => next(err));
});

module.exports = router;
