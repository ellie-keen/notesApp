describe('creating a note');
  it('should create a note object with a string');
    var testNote = new Note('this is a test');
    assert.toEqual(testNote.text, 'this is a test');