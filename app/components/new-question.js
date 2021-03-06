import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        questionText: this.get('question'),
        details: this.get('details'),
        author: this.get('username'),
        category: this.get('category'),
        timestamp: Date.now()
      };
      this.set('question', '');
      this.set('details', '');
      this.set('username', '');
      this.sendAction('save', params);
    }
  }
});
