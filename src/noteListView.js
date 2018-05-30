(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.viewList = function() {
    var htmlString = '<ul>';
    noteList.displayNotes().forEach(function(note) {
    htmlString += `<li>${note.text}</li>`;
    });
    return htmlString += '</ul>';
  };

  exports.NoteListView = NoteListView;

})(this);
