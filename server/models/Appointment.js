const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
	customer: { type: Schema.Types.ObjectId, ref: 'Weeks' },
	groomer: { type: Schema.Types.ObjectId, ref: 'Weeks' },
	dog: [ { type: Schema.Types.ObjectId, ref: 'Dog' } ],
	booked: Boolean,
	Accepted: Boolean,
	time: String
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
