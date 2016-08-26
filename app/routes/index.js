import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('question', {
      limitToLast: 5
    });
  },
  actions: {
    save(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    }
  }
});
