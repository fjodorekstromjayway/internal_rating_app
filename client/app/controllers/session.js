import Ember from 'ember';

export default Ember.Controller.extend({
	model:function(params){
		console.log(params.id);
		return this.store.find('session', params.id);
		//return this.store.find('session', params.session_id);
	},
	actions: {
		addRating: function(){
			console.log('adding rating');
		}
	}
});
