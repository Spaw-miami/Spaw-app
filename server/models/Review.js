const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
	starNumber: Number,
	content: String,
	grommer: { type: Schema.Types.ObjectId, ref: 'Groomer' },
	author: { type: Schema.Types.ObjectId, ref: 'User' },
	dog: { type: Schema.Types.ObjectId, ref: 'Dog' },
	date: String
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

// let dummy = {
// 	"starNumber": "5",
// 	"content": "Message",
// 	"grommer": "5d9e04ddfc6c8c290d256220",
// 	"author": "5d9e03428d6d0f287e97317c",
// 	"dog": "5d9e0a0f85bd3729aa0c3709",
// 	"date": "Today Date"
// }
