(function(exports) {
  function Note(string){
    this.text = string;
  };

  Note.prototype.displayText = function() {
      return this.text;
    };

  exports.Note = Note;

})(this);
