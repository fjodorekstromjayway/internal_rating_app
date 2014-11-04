import DS from 'ember-data';

/*export default DS.FixtureAdapter.extend({
	primaryKey: function(type){
		return '_id';
	}
});*/
var Adapter = DS.RESTAdapter.extend({
	//host: 'https://rateapp-api.herokuapp.com'
	host: 'http://127.0.0.1:3000'//'localhost:3000'
});

export default Adapter;