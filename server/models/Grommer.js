const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grommerSchema = new Schema({
	username: String,
	password: String,
	firstName: String,
	lastName: String,
	profilePic: String,
	email: String,
	phoneNumber: String,
	about: String,
	address: String,
	startingTime: String,
	endTime: String,
	weeeks: [ { type: Schema.Types.ObjectId, ref: 'Weeks' } ],
	reviews: [ { type: Schema.Types.ObjectId, ref: 'Reviews' } ],
	pricing: { type: Schema.Types.ObjectId, ref: 'Price' }
});

const Grommer = mongoose.model('Grommer', grommerSchema);
module.exports = Grommer;

// let dummy = {
//   "startingTime": "9:00 am",
//   "endTime": "6:00 pm",
// 	"username": "String",
// 	"password": "String",
// 	"firstName": "String",
// 	"lastName": "String",
// 	"profilePic": "String",
// 	"email": "String",
// 	"phoneNumber": "String",
// 	"about": "String",
// 	"address": "String"
// }

// Grommer C finished