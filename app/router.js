import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('notes', function() {
    this.route('show', { path: '/:note_id' });
    this.route('new');
  });
});

export default Router;
