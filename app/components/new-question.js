import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        questionText: this.get('question'),
        details: this.get('details'),
        author: this.get('username')
      }
      this.sendAction('save', params);
    }
  }
});
