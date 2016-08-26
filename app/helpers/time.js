import Ember from 'ember';
import moment from 'moment';

export function time(params/*, hash*/) {
  var time = new Date(params[0]);
  return moment(time).format("MMM Do [']YY h:mm A")
}

export default Ember.Helper.helper(time);
