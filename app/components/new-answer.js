import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        answerText: this.get('answer'),
        author: this.get('username'),
        question: this.get('question'),
        votes: 0
      };
      this.set('username', '');
      this.set('answer', '');
      this.sendAction("save", params);
    }
  }
});
