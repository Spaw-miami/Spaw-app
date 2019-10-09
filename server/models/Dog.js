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
// 	"picture": "String",
// 	"breed": "String",
// 	"size": "String",
// 	"age": "number",
// 	"userId": "String"
// }
