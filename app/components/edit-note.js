import Ember from 'ember';

export default Ember.TextArea.extend({
  didInsertElement: function() {
    this.$().focus();
    this.$().expanding();
  },
  focusOut: function() {
    this.sendAction();
  }
});
