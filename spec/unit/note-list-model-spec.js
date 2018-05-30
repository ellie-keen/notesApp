describe('Creating a note list model');
  var testNoteModel = new noteModel();
  var notes = new noteModel();

  it('should be instantiated with an empty array');
    assert.toEqual(testNoteModel.array, []);

  it('should be able to #addNote to the model array');
    testNoteModel.addNote(new Note("test"));
    assert.toEqual(testNoteModel.array, [{text: "test"}]);

  it('should #displayNotes within an array');
    notes.addNote(new Note("uber"));
    notes.addNote(new Note("mega"));
    assert.toEqual(notes.displayNotes(), [{text: "uber"}, {text: "mega"}]);

  it('should store the text property of the note');
