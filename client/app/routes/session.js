import Ember from 'ember';

export default Ember.Route.extend({
	model:function(params){
		console.log(params.id);
		return this.store.find('session', params.id);
		//return this.store.find('session', params.session_id);
	},
	setupController: function(controller, model){
		controller.set('model', model);
	}//,
/*	serialize: function(session){
		return {session_id: session.get('id')};
	}*/
});