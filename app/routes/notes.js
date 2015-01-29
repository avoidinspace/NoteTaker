import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('note');
  },
  setupController: function(controller, notes) {
    controller.set('notes', notes);
  }
});
