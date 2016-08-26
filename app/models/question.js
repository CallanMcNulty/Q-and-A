import DS from 'ember-data';

export default DS.Model.extend({
  questionText: DS.attr(),
  details: DS.attr(),
  author: DS.attr(),
  timestamp: DS.attr("number"),
  answers: DS.hasMany('answer', {async: true})
});
