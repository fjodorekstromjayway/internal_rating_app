var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Session = require('../models/Session.js');

router.get('/:id', function(req, res, next){
	Session.findById(req.params.id, function(err, post){
		if(err){
			return next(err);
		}
		res.json({"session":post});
	});
});

router.put('/:id/ratings', function(req, res, next){
	Session.findById(req.params.id).exec()
	.then(function(session){
		session.ratings.push(req.body);
		console.log(req.body);
		var newObj = session.toObject();
		delete newObj._id;
		return Session.findByIdAndUpdate(req.params.id, newObj).exec();
	})
	.then(function(updatedSession){
		console.log(updatedSession);
		res.json(updatedSession);
	}, next);
});


router.put('/:id', function(req, res, next){
	Session.findByIdAndUpdate(req.params.id, req.body, function(err, post){
		if(err){
			return next(err);
		}
		res.json({"session":post});
	});
});

router.delete('/:id', function(req, res, next){
	Session.findByIdAndRemove(req.params.id, function(err, post){
		if(err){
			return next(err);
		}
		res.json(post);
	});
});

module.exports = router;