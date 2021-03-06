import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service('favorites'),
  actions: {
    remove(question) {
      this.get("favorites").removeFav(question);
    }
  }
});
