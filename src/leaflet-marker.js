(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    factory(require('server-components'),
            require('server-components-static'));
  } else {
    factory(root.components,
            root.componentsStatic);
  }
}(this, function (components, componentsStatic) {
  function getClosest(start, elementSelector) {
    var el = start;
    while (el && !el.matches(elementSelector)) {
      el = el.parentNode;
    }
    return el;
  }

  var LeafletMarkerElement = components.newElement();
  LeafletMarkerElement.createdCallback = function (document) {
    componentsStatic.includeScript(document, "/src/leaflet-marker.js");

    var mapElement = getClosest(this, 'leaflet-map');

    var lat = this.getAttribute("lat");
    var long = this.getAttribute("long");

    var marker = mapElement.L.marker([lat, long]);
    marker.addTo(mapElement.map);
  };

  components.registerElement("leaflet-marker", { prototype: LeafletMarkerElement });
}));
