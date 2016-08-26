import Ember from 'ember';

export default Ember.Service.extend({
  contents: [],
  addFav(question) {
    var isPresent = false;
    this.get("contents").forEach(function(fav) {
      if(fav===question) {
        isPresent = true;
      }
    });
    if(!isPresent) {
      this.get("contents").pushObject(question);
    }
  },
  removeFav(question) {
    var newContents = [];
    this.get("contents").forEach(function(fav) {
      if(fav!==question) {
        newContents.addObject(fav);
      }
    });
    this.set("contents", newContents);
  }
});
