import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['start_time'],
  sortAscending: true,
  content: [],
  filter: "",
  filteredContent: function() {
    var filter = this.get('filter');
    return this.get('content').filter(function(item, index, enumerable){
      return item.get('day').toLowerCase().match(filter.toLowerCase());
    });
  }.property('filter', 'content.@each'),
  actions: {
    setFilter: function(param){
      this.set('filter', param);
    }
  },
  wednesdayContent: function(){
    var filter = 'Wednesday';
    return this.get('content').filter(function(item, index, enumerable){
      return item.get('day').toLowerCase().match(filter.toLowerCase());
    });
  }, 
  thursdayContent: function(){
    var filter = 'Thursday';
    return this.get('content').filter(function(item, index, enumerable){
      return item.get('day').toLowerCase().match(filter.toLowerCase());
    });
  },
  fridayContent: function(){
    var filter = 'Friday';
    return this.get('content').filter(function(item, index, enumerable){
      return item.get('day').toLowerCase().match(filter.toLowerCase());
    });
  }
});
