var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
		title: String,
		description: String,
		areas: Array,
		rating: Number,
		recommendation: Number
});

module.exports = mongoose.model('Session', SessionSchema);