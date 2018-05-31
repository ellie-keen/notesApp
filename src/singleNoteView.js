(function(exports){
  function SingleNoteView(note) {
    this.noteModel = note;
  };

  SingleNoteView.prototype.displayNoteHtml = function() {
    var html = '<div>'
    html += this.noteModel
    html += '</div>'

    return html;
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
