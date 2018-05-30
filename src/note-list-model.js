(function(exports) {
  function noteModel(){
    this.array = [];
  };
  noteModel.prototype.addNote = function(note) {
      return this.array.push(note);
  }
  noteModel.prototype.displayNotes = function() {
      return this.array;
    };

  exports.noteModel = noteModel;

})(this);
