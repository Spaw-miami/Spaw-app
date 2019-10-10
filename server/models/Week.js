const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weekSchema = new Schema({
	weekid: String,
	Monday: Object,
	Tuesday: Object,
	Wednesday: Object,
	Thursday: Object,
	Friday: Object,
	Saturday: Object,
	Sunday: Object,
	id: Number
});

const Week = mongoose.model('Week', weekSchema);
module.exports = Week;
