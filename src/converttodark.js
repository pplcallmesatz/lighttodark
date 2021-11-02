var sketch = require('sketch/dom')
var async = require('sketch/async')
var DataSupplier = require('sketch/data-supplier')
var UI = require('sketch/ui')
var Settings = require('sketch/settings')
var Page = require('sketch/dom').Page



export default function () {
    var document = sketch.getSelectedDocument()
    var selectedLayers = document.selectedLayers
    var selectedCount = selectedLayers.length
    let page = document.selectedPage
    let Artboard = sketch.Artboard
    let ShapePath = sketch.ShapePath
    var pageLayer = document.getLayersNamed("Light")
    var sharedStyles = document.sharedLayerStyles;
    var sharedTextStyles = document.sharedTextStyles;
    var SharedStyle = require('sketch/dom').SharedStyle
    pageLayer.selected = false;
    var layers = document.getLayersNamed("Dark")

    if (layers.length) {
        for(let i = 0; i < layers.length; i++) {
            layers[i].remove();
        }
        duplicateThePage();
    } else {
        duplicateThePage();
    }

    function duplicateThePage() {
        var bb = pageLayer[0].duplicate();
        bb.name = "Dark";
        bb.selected = true;
        //document.centerOnLayer(bb.layers[0])
        last(bb);
        view(bb);
    }

    function last(page) {
        let art = page.layers;
        for (let i = 0; i < art.length; i++) {
            rEiterate(art[i].layers)
        }
    }

    function rEiterate(art) {
        let sharedStyle;
        for (let i = 0; i < art.length; i++) {
            //console.log(art[i].type)
            switch (art[i].type) {
                case "ShapePath":
                case "Shape":
                case "Oval":
                    if (art[i].sharedStyleId != null) {
                        sharedStyle = document.getSharedLayerStyleWithID(art[i].sharedStyleId)
                        var layerIdError = ["layer", art[i].id, art[i].name];
                        dd(sharedStyle, layerIdError);
                    } else {}
                    break;
                case "Text":
                    if (art[i].sharedStyleId != null) {
                        sharedStyle = document.getSharedTextStyleWithID(art[i].sharedStyleId)
                        var layerIdError = ["text", art[i].id, art[i].name];
                        dd(sharedStyle, layerIdError);
                    } else {}
                    break;
                case "SymbolInstance":
                    var symbolToGroup = art[i].detach()
                    rEiterate(symbolToGroup.layers);
                    break;
                case "Override":

                    break;
                case "Group":
                    let checkGroupLayers = art[i].layers;
                    if (art[i].sharedStyleId != null) {
                        sharedStyle = document.getSharedLayerStyleWithID(art[i].sharedStyleId)
                        var layerIdError = ["layer", art[i].id, art[i].name];
                        dd(sharedStyle, layerIdError);
                        if (checkGroupLayers > 0) {
                            rEiterate(art[i].layers);
                        }

                    } else {
                        rEiterate(art[i].layers); //console.log(art[i].layers)
                    }

                    break
                default:
                    // code block
            }
            function dd(sharedStyle, type) {
                let myLayerStyle;
                let Name = sharedStyle.name;
                let splitName = Name.split("light/");
                if (splitName.length <= 1) {
                    UI.message("There is a error in the selected layer: " + type[2]);
                    var layerDefect = document.getLayerWithID(type[1])

                    if (layerDefect) {
                        document.centerOnLayer(layerDefect)
                        layerDefect.selected = true;

                        return false;
                    } else {
                    }
                } else {
                }
                let getName = "dark/" + splitName[1];
                if (type[0] === "text") {
                    myLayerStyle = sharedTextStyles.find(sharedTextStyles => sharedTextStyles.name == getName)

                } else {
                    myLayerStyle = sharedStyles.find(sharedStyles => sharedStyles.name == getName)
                }
                let shStyle = [myLayerStyle.style, myLayerStyle.id];
                art[i].style = shStyle[0];
                art[i].sharedStyleId = shStyle[1];
            }
        }

    }

    function view(data) {
        document.centerOnLayer(data.layers[0])
    }

    document.save()
    UI.message("Document saved Successfully 🎉")

}