import Ember from 'ember';

export default Ember.Route.extend({
	model:function(params){
		return this.store.find('session', params.session_id);
	},
	serialize: function(session){
		return {session_id: session.get('_id')};
	}
});