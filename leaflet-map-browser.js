window.addEventListener("load", function (event) {
  var LeafletMapElement = Object.create(HTMLElement.prototype);
  LeafletMapElement.createdCallback = function () {
    var lat = this.getAttribute("lat");
    var long = this.getAttribute("long");
    var zoom = this.getAttribute("zoom");

    var leftoverNodes = [].slice.call(this.querySelectorAll(".leaflet-map-pane, .leaflet-control-container"));
    leftoverNodes.forEach(function (node) { node.remove() });

    var map = L.map(this).setView([lat, long], zoom);
    var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Export these properties on the element, so subelements can interact with it.
    this.L = L;
    this.map = map;
  };

  document.registerElement("leaflet-map", { prototype: LeafletMapElement });

  var LeafletMarkerElement = Object.create(HTMLElement.prototype);
  LeafletMarkerElement.createdCallback = function (document) {
    var mapElement = this.closest('leaflet-map');

    var lat = this.getAttribute("lat");
    var long = this.getAttribute("long");

    var marker = mapElement.L.marker([lat, long]);
    marker.addTo(mapElement.map);
  };

  document.registerElement("leaflet-marker", { prototype: LeafletMarkerElement });
});
