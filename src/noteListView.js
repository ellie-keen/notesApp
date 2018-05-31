(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  };

  NoteListView.prototype.viewList = function() {
    if (this.noteList.getNotes().length == 0) {
      return ''
    }
    var htmlString = '<ul>';
    this.noteList.getNotes().forEach(function(note) {
    htmlString += `<li><div>${note.text}</div></li>`;
    });
    return htmlString += '</ul>';
  };

  exports.NoteListView = NoteListView;

})(this);
