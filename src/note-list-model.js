(function(exports) {
  function noteModel(){
    this.array = [];
  };
  noteModel.prototype.addNote = function(string) {
      return this.array.push(new Note(string));
  }
  noteModel.prototype.displayNotes = function() {
      return this.array;
    };

  exports.noteModel = noteModel;

})(this);
