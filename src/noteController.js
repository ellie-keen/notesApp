(function(exports) {

  function NoteController(noteList) {
    var noteList = new NoteList();
    noteList.addNote('Favourite drink: seltzer');
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.displayHTML = function(){
    var html = this.noteListView.viewList();
    document.getElementById('app').innerHTML = html;
  };

  exports.NoteController = NoteController;

})(this);
