import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.resource('sessions', {path: '/sessions'});
  this.resource('sessions', {path: '/sessions'}, function(){
  	this.route('session', {path: '/:id'});
  });
  
  //this.resource('session', {path: '/sessions/:session_id'});
});

export default Router;
