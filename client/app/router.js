import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('sessions');
	this.resource('session', {path: 'sessions/:id'});
  //this.resource('sessions', function(){
 // 	this.route('session', {path: '/:id'});
  //});
  
  //this.resource('session', {path: '/sessions/:session_id'});
});

export default Router;
