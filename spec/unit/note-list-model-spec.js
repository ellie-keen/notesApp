describe('Creating a note list model');
  var testNoteModel1 = new noteModel();

  it('should be instantiated with an empty array');
    assert.toEqual(testNoteModel1.array, []);

describe('#addNote');
  var testNoteModel2 = new noteModel();

  it('should be able to #addNote to the model array');
    testNoteModel2.addNote("test");
    assert.toEqual(testNoteModel2.array, [{text: "test"}]);

describe('#displayNote')
  var testNoteModel3 = new noteModel();

  it('should #displayNotes within an array');
    testNoteModel3.addNote("uber");
    testNoteModel3.addNote("mega");
    assert.toEqual(testNoteModel3.displayNotes(), [{text: "uber"}, {text: "mega"}]);
