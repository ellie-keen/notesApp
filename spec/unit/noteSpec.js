describe('Note');
  describe('#text');
    it('should instantiate a note object with a string');
      var testNote = new Note('this is a test');
      assert.toEqual(testNote.text, 'this is a test');

  describe('#getText');
    it('should display the text property');
      var testNote = new Note('test');
      assert.toEqual(testNote.getText(), 'test')
