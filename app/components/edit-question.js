import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,
  actions: {
    beginEdit() {
      this.set('editing', true);
    },
    update(question) {
      question.save();
      this.set("editing", false);
    }
  }
});
