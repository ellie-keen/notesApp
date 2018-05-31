describe('NoteListView');
  describe('#viewList');
    it('should list each item in the array as a string of HTML');
      var noteList = new NoteList();
      var noteListView = new NoteListView(noteList);

      noteList.addNote('dummy');
      noteList.addNote('test');
      assert.toEqual(noteListView.viewList(), '<ul><li><div>dummy</div></li><li><div>test</div></li></ul>');

    it('should return an empty string if no notes are in the array');
      var emptyNoteList = new NoteList();
      var emptyListView = new NoteListView(emptyNoteList);

      assert.toEqual(emptyListView.viewList(), '');
