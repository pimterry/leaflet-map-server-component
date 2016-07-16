var components = require("server-components");
var componentsStatic = require("server-components-static");
var _ = require("lodash");

function getClosest(start, elementSelector) {
  var el = start;
  while (el && !el.matches(elementSelector)) {
    el = el.parentNode;
  }
  return el;
}

var LeafletPolygonElement = components.newElement();
LeafletPolygonElement.createdCallback = function (document) {
  var mapElement = getClosest(this, 'leaflet-map');

  var pointsString = this.getAttribute("points");
  var points = pointsString.split(/[^0-9\.]/).filter((x) => x !== "").map((p) => parseFloat(p));

  var coordPairs = _.zip(points.filter((p, i) => i % 2 === 0),
                         points.filter((p, i) => i % 2 !== 0));

  var polygon = mapElement.L.polygon(coordPairs);
  polygon.addTo(mapElement.map);
};

components.registerElement("leaflet-polygon", { prototype: LeafletPolygonElement });
