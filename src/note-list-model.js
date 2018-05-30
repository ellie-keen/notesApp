(function(exports) {
  function noteModel(note){
    this.array = [];
    this.array.push(note)
  };

  noteModel.prototype.displayArray = function() {
      return this.array;
    };

  exports.noteModel = noteModel;

})(this);
