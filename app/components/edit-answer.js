import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,
  actions: {
    beginEdit() {
      this.set('editing', true);
    },
    update(answer) {
      answer.save();
      this.set("editing", false);
    },
    destroy(answer) {
      answer.destroyRecord();
    }
  }
});
