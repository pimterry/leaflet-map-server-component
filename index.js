var components = require("server-components");

var LeafletMapElement = components.newElement();
LeafletMapElement.createdCallback = function () {
    this.innerHTML = "HI THERE";
};

components.registerElement("leaflet-map", { prototype: LeafletMapElement });
