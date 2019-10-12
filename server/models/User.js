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
		reviews: [ { type: Schema.Types.ObjectId, ref: 'Review' } ],
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

// let dummyCreate = {
// 	"username": "hello",
// 	"password": "bye",
// 	"firstName": "Christian",
// 	"lastName": "Roque",
// 	"profilePic": "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png",
// 	"email": "croqu008@fiu.edu",
// 	"phoneNumber": "7862039897",
// 	"address": "My address"
// };

// let dummyRead = {
// 	"userID": "5d9e2d0947f73f2f5012f132"
// }

// let dummyUpdate = {
//  "userID": "5d9f9c2e8afcf44f5676895b",
// 	"username": "I pay too much",
// 	"firstName": "Generous",
// 	"lastName": "Bill",
// 	"profilePic": "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F540230%2Fhand-holding-100-dollar-bills-cash.jpg&w=700&op=resize",
// 	"email": "rich@google.com",
// 	"phoneNumber": "1",
// 	"address": "Private"
// };

// User C finished
