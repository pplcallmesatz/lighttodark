import sketch from 'sketch'
var UI = require('sketch/ui')
// selection-changed.js
function onSelection(context) {
  var doc = context.document
  var selection = context.selection
  export function onOpenDocument(context) {
  context.actionContext.document.showMessage('Document Opened')
}
}