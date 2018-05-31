describe('NoteListModel');
  describe('#array');
    it('should be instantiated with an empty array');
      var testNoteList1 = new NoteList();
      assert.toEqual(testNoteList1.array, []);

  describe('#addNote');
    it('should be able to add a note to the model array');
      var testNoteList2 = new NoteList();
      testNoteList2.addNote("test");
      assert.toEqual(testNoteList2.array, [{text: "test"}]);

  describe('#getNotes')
    it('should display notes within an array');
      var testNoteList3 = new NoteList();
      testNoteList3.addNote("test");
      testNoteList3.addNote("test");
      assert.toEqual(testNoteList3.getNotes(), [{text: "test"}, {text: "test"}]);
