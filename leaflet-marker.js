var components = require("server-components");
var componentsStatic = require("server-components-static");
var leaflet = require("./leaflet");

function getClosest(start, elementSelector) {
  var el = start;
  while (el && !el.matches(elementSelector)) {
    el = el.parentNode;
  }
  return el;
}

var LeafletMarkerElement = components.newElement();
LeafletMarkerElement.createdCallback = function (document) {
  var mapElement = getClosest(this, 'leaflet-map');

  mapElement.L.Icon.Default.imagePath = "http://cdn.leafletjs.com/leaflet/v0.7.7/images";

  var lat = this.getAttribute("lat");
  var long = this.getAttribute("long");

  var marker = mapElement.L.marker([lat, long]);
  marker.addTo(mapElement.map);
};

components.registerElement("leaflet-marker", { prototype: LeafletMarkerElement });
