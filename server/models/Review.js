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
// 	"groomer": "5d9e2dac8820f230b593737d",
// 	"author": "5d9e2d0947f73f2f5012f132",
// 	"dog": "5d9e2ed8f6d47d30d6aa8d2c",
// 	"date": "Today date"
// }
