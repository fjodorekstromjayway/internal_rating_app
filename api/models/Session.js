var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
		title: String,
		abstract: String,
		start_time: String,
		ratings: Array,
		end_time: String,
		speakers: Array,
		space_name: String
});

SessionSchema.virtual('id').get(function(){
	return this._id;
});

module.exports = mongoose.model('Session', SessionSchema);