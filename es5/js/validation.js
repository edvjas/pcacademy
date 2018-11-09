'use strict';

var minRows = 2;
var maxRows = 4;
var taLineHeight = 15;
var padding = 2;
var borderWidth = 2;

var te = document.getElementById('myTextarea');
te.addEventListener('input', resizeTextArea);

function resizeTextArea() {
  var style = window.getComputedStyle(te, null).getPropertyValue('line-height');
  taLineHeight = parseFloat(style);
  var taHeight = te.scrollHeight - borderWidth; // Get the scroll height of the textarea
  var numberOfLines = Math.floor(taHeight / taLineHeight);
  if (numberOfLines <= minRows) {
    this.style.height = minRows * taLineHeight + borderWidth + padding;
  } else if (numberOfLines > maxRows) {
    this.style.height = maxRows * taLineHeight + borderWidth + padding;
    this.style.overflowY = 'scroll';
  } else {
    this.style.height = numberOfLines * taLineHeight + borderWidth + padding;
    this.style.overflowY = 'hidden';
  }
}