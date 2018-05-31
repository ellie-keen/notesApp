describe('NoteController');
  describe('constructor')
    it('should take a note list model as a parameter');
      var noteList = new NoteList();
      var noteController = new NoteController(new NoteList());

      noteList.addNote('Favourite drink: seltzer');
      assert.toEqual(noteController.noteListView.noteList, noteList);

    it('should add a note');
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);

      assert.toEqual(noteController.noteListView.noteList.getNotes().pop().getText(), 'Favourite drink: seltzer')

  describe('#displayHTML');
    it('should insert the HTML from the note list into the app element');
      var appId = document.getElementById('app');
      var noteList = new NoteList();
      var noteController = new NoteController(noteList);
      
      noteController.displayHTML();
      appId = document.getElementById('app');
      assert.toEqual(appId.innerHTML, '<ul><li><div>Favourite drink: seltzer</div></li></ul>')
