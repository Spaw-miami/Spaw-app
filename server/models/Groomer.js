const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groomerSchema = new Schema({
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
	weeks: [ { type: Schema.Types.ObjectId, ref: 'Week' } ],
	reviews: [ { type: Schema.Types.ObjectId, ref: 'Reviews' } ],
	pricing: [ { type: Schema.Types.ObjectId, ref: 'Price' } ]
});

const Groomer = mongoose.model('Groomer', groomerSchema);
module.exports = Groomer;

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

// let dummyRead = {
// 	"groomerID": "5d9f5746d6978446bd9df4ac"
// }

// Groomer C finished
