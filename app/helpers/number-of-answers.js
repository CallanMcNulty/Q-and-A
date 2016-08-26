import Ember from 'ember';

export function numberOfAnswers(params/*, hash*/) {
  return params[0].get('answers').get('content').length;
}

export default Ember.Helper.helper(numberOfAnswers);
