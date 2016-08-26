import Ember from 'ember';

export function categoryFormat(params/*, hash*/) {
  return params[0].replace("_&_", " & ");
}

export default Ember.Helper.helper(categoryFormat);
