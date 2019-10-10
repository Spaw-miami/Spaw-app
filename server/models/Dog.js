const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
	name: String,
	picture: String,
	breed: String,
	size: String,
	age: Number
});

const Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;

// let dummy = {
// 	"name": "String",
// 	"picture": "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
// 	"breed": "String",
// 	"size": "String",
// 	"age": "3",
// 	"userId": "5d9f9c2e8afcf44f5676895b"
// }

// let dummy = {
//  "dogID": "5d9f9dc612d27f4fd8e1c92c",
// 	"name": "String",
// 	"picture": "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
// 	"breed": "String",
// 	"size": "String",
// 	"age": "3",
// 	"userId": "5d9f9c2e8afcf44f5676895b"
// }
