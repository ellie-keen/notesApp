describe('Creating a note list model');
  var testNoteModel = new noteModel();

  it('should be instantiated with an empty array');
    assert.toEqual(testNoteModel.array, [undefined]);

  it('should display the array');
    assert.toEqual(testNoteModel.displayArray(), [undefined]);

  it('should store an array of note models');
    var modelWithNote = new noteModel(new Note('test'));
    assert.toEqual(modelWithNote.array, [{text: "test"}]);
