import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upvote(answer) {
      answer.set("votes", answer.get("votes")+1);
    },
    downvote(answer) {
      answer.set("votes", answer.get("votes")-1);
    }
  }
});
