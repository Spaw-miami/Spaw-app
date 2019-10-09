const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: String,
		password: String,
		firstName: String,
		lastName: String,
		profilePic: String,
		email: String,
		phoneNumber: String,
		address: String,
		dogs: [ { type: Schema.Types.ObjectId, ref: 'Dog' } ],
		reviews: [ { type: Schema.Types.ObjectId, ref: 'Reviews' } ],
		receipt: [ { type: Schema.Types.ObjectId, ref: 'Receipt' } ]
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
);

const User = mongoose.model('User', userSchema);
module.exports = User;

// let dummy = {
// 	"username": "hello",
// 	"password": "bye",
// 	"firstName": "Christian",
// 	"lastName": "Roque",
// 	"profilePic": "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
// 	"email": "croqu008@fiu.edu",
// 	"phoneNumber": "7862039897",
// 	"address": "My address"
// }

// User C finished
