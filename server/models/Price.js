const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema({
	large: Number,
	medium: Number,
	small: Number
});

const Price = mongoose.model('Price', priceSchema);
module.exports = Price;

// let dummy = {
// 	"groomerID": "5d9f62a01429e24aaf7fe6fd",
// 	"large": "75",
// 	"medium": "50",
// 	"small": "25"
// }

// let dummyUpdate = {
//   "priceID": "5d9f9d1f581f3d4fa894460e",
// 	"groomerID": "5d9f62a01429e24aaf7fe6fd",
// 	"large": "75",
// 	"medium": "50",
// 	"small": "25"
// }
