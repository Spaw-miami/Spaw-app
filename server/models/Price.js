const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const priceSchema = new Schema({
	big: Number,
	medium: Number,
	small: Number
});

const Price = mongoose.model('Price', priceSchema);
module.exports = Price;
