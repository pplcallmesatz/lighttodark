var sketch = require('sketch/dom')
var async = require('sketch/async')
var DataSupplier = require('sketch/data-supplier')
var UI = require('sketch/ui')
var Settings = require('sketch/settings')
var Page = require('sketch/dom').Page

// a more convenient require which exposes everything (might be a bit slower)
var sketch = require('sketch')
var Document = require('sketch/dom').Document
// also exposed on Document
var document = Document.getSelectedDocument()
// documentation: https://developer.sketchapp.com/reference/api/
var selection = document.selectedLayers

export default function() {
  //  UI.alert("Version", "V11")
    //var d = document.toJSON();
    //console.log(d);
    
    
}
