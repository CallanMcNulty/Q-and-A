import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['votes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  actions: {
    vote(upDown, answer) {
      answer.set("votes", answer.get("votes")+upDown);
      answer.save();
    }
  }
});
