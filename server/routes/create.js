const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Groomer = require('../models/Groomer');
const Dog = require('../models/Dog');
const Review = require('../models/Review');
const Week = require('../models/Week');
const Price = require('../models/Price');
const Appointment = require('../models/Appointment');

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
			req.logIn(userSaved, () => {
				// hide "encryptedPassword" before sending the JSON (it's a security risk)
				userSaved.password = undefined;
				res.json(userSaved);
			});
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

			function addingWeeks() {
				let promises = [];
				for (let i = 1; i <= 52; i++) {
					promises.push(
						Week.create({
							weekNumber: i,
							groomerID: groomerSaved._id
						}).then((week) => {
							console.log(week._id);
							Groomer.findByIdAndUpdate(groomerSaved._id, { $push: { weeks: week._id } }).then(
								console.log(`Created week: ${i}`)
							);
						})
					);
				}
				Promise.all(promises).then((result) => {
					console.log('promises may be done', result);
				});
				console.log('started to add days');
				let weekNumber = 1;
				let day = 0;
				let hoursWorked = 0;
				for (let i = 0; i < 4 * 7 * t; i++) {
					if (day == 0) {
						Appointment.create({
							groomer: groomerSaved._id,
							booked: false,
							Accepted: false,
							time: sArr.join(':'),
							weekNumber: weekNumber
						}).then((app) => {
							Week.findOneAndUpdate(
								{ weekNumber: app.weekNumber },
								{ $push: { Monday: app._id } }
							).then((week) => {
								console.log('HIT IT', week);
							});
						});
						sArr[0] = Number(sArr[0]) + 1;

						if (Number(sArr[0]) % 12 == 0) {
							sArr[1] = '00 pm';
							sArr[0] = Number(sArr[0]) % 12;
						}
						hoursWorked += 1;
						if (hoursWorked == t) {
							hoursWorked = 0;
							day += 1;
							continue;
						}
					}
					if (day == 1) {
						Appointment.create({
							groomer: groomerSaved._id,
							booked: false,
							Accepted: false,
							time: sArr.join(':'),
							weekNumber: weekNumber
						}).then((app) => {
							Week.findOneAndUpdate(
								{ weekNumber: app.weekNumber },
								{ $push: { Tuesday: app._id } }
							).then((week) => {
								console.log('HIT IT', week);
							});
						});

						sArr[0] = Number(sArr[0]) + 1;

						if (Number(sArr[0]) % 12 == 0) {
							sArr[1] = '00 pm';
							sArr[0] = Number(sArr[0]) % 12;
						}
						hoursWorked += 1;
						if (hoursWorked == t) {
							hoursWorked = 0;
							day += 1;
							continue;
						}
					}
					if (day == 2) {
						Appointment.create({
							groomer: groomerSaved._id,
							booked: false,
							Accepted: false,
							time: sArr.join(':'),
							weekNumber: weekNumber
						}).then((app) => {
							Week.findOneAndUpdate(
								{ weekNumber: app.weekNumber },
								{ $push: { Wednesday: app._id } }
							).then((week) => {
								console.log('HIT IT', week);
							});
						});

						sArr[0] = Number(sArr[0]) + 1;

						if (Number(sArr[0]) % 12 == 0) {
							sArr[1] = '00 pm';
							sArr[0] = Number(sArr[0]) % 12;
						}
						hoursWorked += 1;
						if (hoursWorked == t) {
							hoursWorked = 0;
							day += 1;
							continue;
						}
					}
					if (day == 3) {
						Appointment.create({
							groomer: groomerSaved._id,
							booked: false,
							Accepted: false,
							time: sArr.join(':'),
							weekNumber: weekNumber
						}).then((app) => {
							Week.findOneAndUpdate(
								{ weekNumber: app.weekNumber },
								{ $push: { Thursday: app._id } }
							).then((week) => {
								console.log('HIT IT', week);
							});
						});

						sArr[0] = Number(sArr[0]) + 1;

						if (Number(sArr[0]) % 12 == 0) {
							sArr[1] = '00 pm';
							sArr[0] = Number(sArr[0]) % 12;
						}
						hoursWorked += 1;
						if (hoursWorked == t) {
							hoursWorked = 0;
							day += 1;
							continue;
						}
					}
					if (day == 4) {
						Appointment.create({
							groomer: groomerSaved._id,
							booked: false,
							Accepted: false,
							time: sArr.join(':'),
							weekNumber: weekNumber
						}).then((app) => {
							Week.findOneAndUpdate(
								{ weekNumber: app.weekNumber },
								{ $push: { Friday: app._id } }
							).then((week) => {
								console.log('HIT IT', week);
							});
						});

						sArr[0] = Number(sArr[0]) + 1;

						if (Number(sArr[0]) % 12 == 0) {
							sArr[1] = '00 pm';
							sArr[0] = Number(sArr[0]) % 12;
						}
						hoursWorked += 1;
						if (hoursWorked == t) {
							hoursWorked = 0;
							day += 1;
							continue;
						}
					}
					if (day == 5) {
						Appointment.create({
							groomer: groomerSaved._id,
							booked: false,
							Accepted: false,
							time: sArr.join(':'),
							weekNumber: weekNumber
						}).then((app) => {
							Week.findOneAndUpdate(
								{ weekNumber: app.weekNumber },
								{ $push: { Saturday: app._id } }
							).then((week) => {
								console.log('HIT IT', week);
							});
						});

						sArr[0] = Number(sArr[0]) + 1;

						if (Number(sArr[0]) % 12 == 0) {
							sArr[1] = '00 pm';
							sArr[0] = Number(sArr[0]) % 12;
						}
						hoursWorked += 1;
						if (hoursWorked == t) {
							hoursWorked = 0;
							day += 1;
							continue;
						}
					}
					if (day == 6) {
						Appointment.create({
							groomer: groomerSaved._id,
							booked: false,
							Accepted: false,
							time: sArr.join(':'),
							weekNumber: weekNumber
						}).then((app) => {
							Week.findOneAndUpdate(
								{ weekNumber: app.weekNumber },
								{ $push: { Sunday: app._id } }
							).then((week) => {
								console.log('HIT IT', week);
							});
						});

						sArr[0] = Number(sArr[0]) + 1;

						if (Number(sArr[0]) % 12 == 0) {
							sArr[1] = '00 pm';
							sArr[0] = Number(sArr[0]) % 12;
						}
						hoursWorked += 1;
						if (hoursWorked == t) {
							hoursWorked = 0;
							day = 0;
							weekNumber += 1;
							continue;
						}
						console.log(weekNumber);
					}
				}
			}

			addingWeeks();
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
			User.findByIdAndUpdate(author, { $push: { reviews: reviewSaved._id } }).then((user) => { });
			Groomer.findByIdAndUpdate(groomer, { $push: { reviews: reviewSaved._id } }).then((groomer) => { });

			res.json(reviewSaved);
		})
		.catch((err) => next(err));
});

module.exports = router;
