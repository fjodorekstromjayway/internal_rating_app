import Ember from 'ember';

//TODO: REFACTOR THIS CRAP

export default Ember.Route.extend({
	model:function(params){
		console.log(this.Route);
		return this.store.find('session', params.id);
		//return this.store.find('session', params.session_id);
	},
	actions: {
		addRating: function(context){
			var comment = document.getElementById('new-comment').value;
			var r = document.getElementById('new-rating');
			var rating = r.options[r.selectedIndex].text;
			var newRating = {
				comment: comment.toString(),
				rating: rating.toString()
			}
			console.log(JSON.stringify(newRating));

			var id = this.context.id;
			var session = this.currentModel;
			var oldRatings = session.get('ratings');
			oldRatings.push(newRating);
			//session.save();
			console.log(session);
			//refresh();

			$.ajax({
				url: 'https://rateapp-api.herokuapp.com/sessions/'+id+'/ratings',
				type: 'PUT',
				success: function(data){
					window.location.href = window.location.href;
				},
				data: JSON.stringify({
					comment: newRating.comment,
					rating: newRating.rating
				}),
				contentType: 'application/json; charset=utf-8'
			});

		}
	}
	/*setupController: function(controller, model){
		controller.set('model', model);
	}*/
});