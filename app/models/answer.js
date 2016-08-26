import DS from 'ember-data';

export default DS.Model.extend({
  answerText: DS.attr(),
  author: DS.attr(),
  votes: DS.attr("number"),
  timestamp: DS.attr("number"),
  question: DS.belongsTo('question', {async: true})
});
