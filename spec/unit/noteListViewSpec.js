describe('NoteListView');
  describe('#viewList');
    it('should list each item in the array as a string of HTML');
      var noteList = new NoteList();
      var noteListView = new NoteListView(noteList);

      noteList.addNote('dummy');
      noteList.addNote('test');
      assert.toEqual(noteListView.viewList(), '<ul><li>dummy</li><li>test</li></ul>');
