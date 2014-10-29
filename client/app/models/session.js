import DS from 'ember-data';

//////////////////////////////////
////// LIVE DATA /////////////////
//////////////////////////////////

/*export default DS.Model.extend({
  title: DS.attr('string'),
  presenter: DS.attr('string'),
  description: DS.attr('string'),
  area: DS.attr(),
  rating: DS.attr('number'),
  recommendation: DS.attr('number')
});*/

///////////////////////////////////
/////////// FIXTURE DATA //////////
///////////////////////////////////
var Session = DS.Model.extend({
  title: DS.attr('string'),
  presenter: DS.attr('string'),
  description: DS.attr('string'),
  areas: DS.attr(),
  rating: DS.attr('number'),
  recommendation: DS.attr('number')
});

/*Session.reopenClass({
	FIXTURES: [
		{
			id: 1,
			title: "A word on notes",
			presenter: "Fjodor Ekström",
			description: "How should you really use notes and what is words anyway?",
			areas: ["web","iot","philosophy"],
			rating: 5,
			recommendation: 2
		},
		{
			id: 2,
			title: "A word on pigs",
			presenter: "Fjodor Ekström",
			description: "How should you really use pigs and what is stables anyway?",
			areas: ["farming","human survival","self sufficiency"],
			rating: 2,
			recommendation: 7
		}
	]
});*/

export default Session;