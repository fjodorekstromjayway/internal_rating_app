import DS from 'ember-data';

var serializer = DS.RESTSerializer.extend({
	primaryKey: '_id'//'_id',
  /*extract: function(loader, json, type, record) {
    var newJSON, root;
    root = this.rootForType(type);
    newJSON = {};
    newJSON[root] = json;
    json = newJSON;
    console.log(this);
    this.sideload(loader, type, json, root);
    this.extractMeta(loader, type, json);
    if (json[root]) {
      if (record) {
        loader.updateId(record, json[root]);
      }
      return this.extractRecordRepresentation(loader, type, json[root]);
    } else {
      return Ember.Logger.warn("Extract requested, but no data given for " + type + ". This may cause weird problems.");
    }
  },
  extractMany: function(loader, json, type, records) {
    var i, newJSON, objects, reference, references, root;
    root = this.rootForType(type);
    root = this.pluralize(root);
    newJSON = {};
    newJSON[root] = json;
    json = newJSON;
    this.sideload(loader, type, json, root);
    this.extractMeta(loader, type, json);
    if (json[root]) {
      objects = json[root];
      references = [];
      if (records) {
        records = records.toArray();
      }
      i = 0;
      while (i < objects.length) {
        if (records) {
          loader.updateId(records[i], objects[i]);
        }
        reference = this.extractRecordRepresentation(loader, type, objects[i]);
        references.push(reference);
        i++;
      }
      return loader.populateArray(references);
    }
  }*/
});

export default serializer;


