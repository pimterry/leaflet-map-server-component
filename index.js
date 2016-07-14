var components = require("server-components");
var componentsStatic = require("server-components-static");

var SandboxedModule = require('sandboxed-module');
var leaflet = SandboxedModule.require('leaflet', {
  sourceTransformers: {
      wrapToInjectGlobals: function (source) {
        return `
        module.exports = function (window, document) {
          var navigator = window.navigator;

          ${source}

          return window.L.noConflict();
        }`;
      }
  }
});

var LeafletMapElement = components.newElement();
LeafletMapElement.createdCallback = function (document) {
  componentsStatic.includeCSS(document, "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css");
  componentsStatic.includeCSS(document, "/leaflet-map-component.css");

  var L = leaflet(new components.dom.Window(), document);

  this.clientWidth = 500;
  this.clientHeight = 500;

  var myMap = L.map(this).setView([51.505, -0.09], 13);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(myMap);
};

components.registerElement("leaflet-map", { prototype: LeafletMapElement });
