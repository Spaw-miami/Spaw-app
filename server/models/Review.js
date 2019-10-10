const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	starNumber: Number,
	content: String,
	groomer: { type: Schema.Types.ObjectId, ref: 'Groomer' },
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	dog: { type: Schema.Types.ObjectId, ref: 'Dog' },
	date: String
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

// let dummy = {
// 	"starNumber": "5",
// 	"content": "Message",
// 	"groomer": "5d9f9cdc581f3d4fa89445d9",
// 	"author": "5d9f9c2e8afcf44f5676895b",
// 	"dog": "5d9f9dc612d27f4fd8e1c92c",
// 	"date": "Today date"
// }

// let dummyUpdate = {
//  "reviewID": "5d9f9e3312d27f4fd8e1c92d",
// 	"starNumber": "5",
// 	"content": "Works bit***",
// 	"groomer": "5d9f9cdc581f3d4fa89445d9",
// 	"author": "5d9f9c2e8afcf44f5676895b",
// 	"dog": "5d9f9dc612d27f4fd8e1c92c",
// 	"date": "Today date"
// }
