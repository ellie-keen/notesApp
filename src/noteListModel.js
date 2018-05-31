(function(exports) {
  function NoteList() {
    this.array = [];
  };

  NoteList.prototype.addNote = function(string) {
      return this.array.push(new Note(string));
  };

  NoteList.prototype.getNotes = function() {
      return this.array;
  };

  exports.NoteList = NoteList;

})(this);
