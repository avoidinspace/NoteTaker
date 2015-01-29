import Ember from 'ember';

export default Ember.Controller.extend({
  deleteMode: false,
  isEditing: false,
  actions: {
    editNote: function() {
      this.set('isEditing', true);
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if(this.get('note').get('isDirty')) {
        this.get('note').save().then(function() {
          Bootstrap.GNM.push('Note Saved', 'Saving was successful', 'success');
        }, function() {
          Bootstrap.GNM.push("Something wen't wrong", 'There was an error saving the note', 'warning');
        });
      }
    },
    destroyNote: function() {
      var that = this;
      var note = this.get('note');
      note.destroyRecord().then(function() {
        Bootstrap.GNM.push(note.get('title'), 'Note Deleted', 'info');
        that.transitionToRoute('notes');
      });
    },
    closeNote: function() {
      this.transitionToRoute('notes');
    },
  },
});
