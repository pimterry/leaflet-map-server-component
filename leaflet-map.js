var components = require("server-components");
var componentsStatic = require("server-components-static");
var leaflet = require("./leaflet");

var LeafletMapElement = components.newElement();
LeafletMapElement.createdCallback = function (document) {
  componentsStatic.includeCSS(document, "/leaflet-map.css");
  componentsStatic.includeCSS(document, "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css");

  componentsStatic.includeScript(document, "http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js");
  componentsStatic.includeScript(document, "/leaflet-map-browser.js");

  var L = leaflet(new components.dom.Window(), document);

  this.clientWidth = 500;
  this.clientHeight = 500;

  var lat = this.getAttribute("lat");
  var long = this.getAttribute("long");
  var zoom = this.getAttribute("zoom");

  var map = L.map(this, { zoomControl: false }).setView([lat, long], zoom);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  // Export these properties on the element, so subelements can interact with it.
  this.L = L;
  this.map = map;
};

components.registerElement("leaflet-map", { prototype: LeafletMapElement });
