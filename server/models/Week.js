const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weekSchema = new Schema({
	Monday: [ { type: Schema.Types.ObjectId, ref: 'Appointment' } ],
	Tuesday: [ { type: Schema.Types.ObjectId, ref: 'Appointment' } ],
	Wednesday: [ { type: Schema.Types.ObjectId, ref: 'Appointment' } ],
	Thursday: [ { type: Schema.Types.ObjectId, ref: 'Appointment' } ],
	Friday: [ { type: Schema.Types.ObjectId, ref: 'Appointment' } ],
	Saturday: [ { type: Schema.Types.ObjectId, ref: 'Appointment' } ],
	Sunday: [ { type: Schema.Types.ObjectId, ref: 'Appointment' } ],
	weekNumber: Number,
	groomerID: { type: Schema.Types.ObjectId, ref: 'Groomer' }
});

const Week = mongoose.model('Week', weekSchema);
module.exports = Week;

// if (day == 1) {
// 	Appointment.create({
// 		groomer: groomerSaved._id,
// 		booked: false,
// 		Accepted: false,
// 		time: sArr.join(':')
// 	}).then((app) => {
// 		Week.findByIdAndUpdate(week._id, { $push: { Tuesday: app._id } }).then(
// 			console.log('i added tuesday')
// 		);
// 	});
// 	sArr[0] = Number(sArr[0]) + 1;

// 	if (Number(sArr[0]) % 12 == 0) {
// 		sArr[1] = '00 pm';
// 		sArr[0] = Number(sArr[0]) % 12;
// 	}
// 	hoursWorked += 1;
// 	if (hoursWorked == t) {
// 		day += 1;
// 		continue;
// 	}
// }
// if (day == 2) {
// 	Appointment.create({
// 		groomer: groomerSaved._id,
// 		booked: false,
// 		Accepted: false,
// 		time: sArr.join(':')
// 	}).then((app) => {
// 		Week.findByIdAndUpdate(week._id, { $push: { Wednesday: app._id } }).then(
// 			console.log('i added wednesday')
// 		);
// 	});
// 	sArr[0] = Number(sArr[0]) + 1;

// 	if (Number(sArr[0]) % 12 == 0) {
// 		sArr[1] = '00 pm';
// 		sArr[0] = Number(sArr[0]) % 12;
// 	}
// 	hoursWorked += 1;
// 	if (hoursWorked == t) {
// 		day += 1;
// 		continue;
// 	}
// }
// if (day == 3) {
// 	Appointment.create({
// 		groomer: groomerSaved._id,
// 		booked: false,
// 		Accepted: false,
// 		time: sArr.join(':')
// 	}).then((app) => {
// 		Week.findByIdAndUpdate(week._id, { $push: { Thursday: app._id } }).then(
// 			console.log('i added thursday')
// 		);
// 	});
// 	sArr[0] = Number(sArr[0]) + 1;

// 	if (Number(sArr[0]) % 12 == 0) {
// 		sArr[1] = '00 pm';
// 		sArr[0] = Number(sArr[0]) % 12;
// 	}
// 	hoursWorked += 1;
// 	if (hoursWorked == t) {
// 		day += 1;
// 		continue;
// 	}
// }
// if (day == 4) {
// 	Appointment.create({
// 		groomer: groomerSaved._id,
// 		booked: false,
// 		Accepted: false,
// 		time: sArr.join(':')
// 	}).then((app) => {
// 		Week.findByIdAndUpdate(week._id, { $push: { Friday: app._id } }).then(
// 			console.log('i added friday')
// 		);
// 	});
// 	sArr[0] = Number(sArr[0]) + 1;

// 	if (Number(sArr[0]) % 12 == 0) {
// 		sArr[1] = '00 pm';
// 		sArr[0] = Number(sArr[0]) % 12;
// 	}
// 	hoursWorked += 1;
// 	if (hoursWorked == t) {
// 		day += 1;
// 		continue;
// 	}
// }
// if (day == 5) {
// 	Appointment.create({
// 		groomer: groomerSaved._id,
// 		booked: false,
// 		Accepted: false,
// 		time: sArr.join(':')
// 	}).then((app) => {
// 		Week.findByIdAndUpdate(week._id, { $push: { Saturday: app._id } }).then(
// 			console.log('i added saturday')
// 		);
// 	});
// 	sArr[0] = Number(sArr[0]) + 1;

// 	if (Number(sArr[0]) % 12 == 0) {
// 		sArr[1] = '00 pm';
// 		sArr[0] = Number(sArr[0]) % 12;
// 	}
// 	hoursWorked += 1;
// 	if (hoursWorked == t) {
// 		day += 1;
// 		continue;
// 	}
// }
// if (day == 6) {
// 	Appointment.create({
// 		groomer: groomerSaved._id,
// 		booked: false,
// 		Accepted: false,
// 		time: sArr.join(':')
// 	}).then((app) => {
// 		Week.findByIdAndUpdate(week._id, { $push: { Sunday: app._id } }).then(
// 			console.log('i added sunday')
// 		);
// 	});
// 	sArr[0] = Number(sArr[0]) + 1;

// 	if (Number(sArr[0]) % 12 == 0) {
// 		sArr[1] = '00 pm';
// 		sArr[0] = Number(sArr[0]) % 12;
// 	}
// 	hoursWorked += 1;
// 	if (hoursWorked == t) {
// 		day -= 6;
// 		continue;
// 	}
// }
