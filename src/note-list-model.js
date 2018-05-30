(function(exports) {
  function noteModel(){
    this.array = [];
  };

  noteModel.prototype.displayArray = function() {
      return this.array;
    };

  exports.noteModel = noteModel;

})(this);
