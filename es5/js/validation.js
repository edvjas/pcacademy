'use strict';

var minRows = 2;
var maxRows = 8;

function resizeTextArea() {
  var lineHeight = window.getComputedStyle(this, null).getPropertyValue('line-height');
  var paddingTop = window.getComputedStyle(this, null).getPropertyValue('padding-top');
  var paddingbottom = window.getComputedStyle(this, null).getPropertyValue('padding-bottom');
  var borderTop = window.getComputedStyle(this, null).getPropertyValue('border-top');
  var borderBottom = window.getComputedStyle(this, null).getPropertyValue('border-bottom');

  var padding = parseFloat(paddingbottom) + parseFloat(paddingTop);
  var border = parseFloat(borderTop) + parseFloat(borderBottom);
  var taLineHeightParsed = parseFloat(lineHeight);

  var taHeight = this.scrollHeight - padding; // Get the scroll height of the textarea
  var numberOfLines = Math.floor(taHeight / taLineHeightParsed);
  if (numberOfLines <= minRows || this.value === '') {
    var newHeight = minRows * taLineHeightParsed + border + padding + 'px';
    this.style.height = newHeight;
    this.style.overflowY = 'hidden';
  } else if (numberOfLines > maxRows) {
    var _newHeight = maxRows * taLineHeightParsed + border + padding + 'px';
    this.style.height = _newHeight;
    this.style.overflowY = 'scroll';
  } else {
    var _newHeight2 = numberOfLines * taLineHeightParsed + border + padding + 'px';
    this.style.height = _newHeight2;
    this.style.overflowY = 'hidden';
  }
}

window.onload = function () {
  var textArea = document.getElementById('myTextarea');
  textArea.addEventListener('input', resizeTextArea);
  textArea.dispatchEvent(new Event('input'));
};