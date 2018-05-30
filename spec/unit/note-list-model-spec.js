describe('Creating a note list model');
  it('should be instantiated with an empty array');
    var testNoteModel = new noteModel();
    assert.toEqual(testNoteModel.array, []);

  it('should display the array');
    var testNoteModel = new noteModel();
    assert.toEqual(testNoteModel.displayArray(), []);
