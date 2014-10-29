var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
		title: String,
		description: String,
		areas: Array,
		rating: Number,
		recommendation: Number
});

SessionSchema.virtual('id').get(function(){
	return this._id;
});

module.exports = mongoose.model('Session', SessionSchema);