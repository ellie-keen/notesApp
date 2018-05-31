describe('SingleNoteView');
  it('should take a notel model as a parameter');
    note = new Note('Favourite drink: seltzer');
    singleNoteView = new SingleNoteView(note);
    assert.toEqual(singleNoteView, new SingleNoteView(note));
