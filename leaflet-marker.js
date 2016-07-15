var components = require("server-components");
var componentsStatic = require("server-components-static");

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

  var lat = this.getAttribute("lat");
  var long = this.getAttribute("long");

  var marker = mapElement.L.marker([lat, long]);
  marker.addTo(mapElement.map);
};

components.registerElement("leaflet-marker", { prototype: LeafletMarkerElement });
