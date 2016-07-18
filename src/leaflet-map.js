(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    factory(require('server-components'),
            require('server-components-static'),
            require('./leaflet-for-server'));
  } else {
    factory(root.components,
            root.componentsStatic,
            root.L);
  }
}(this, function (components, componentsStatic, leafletOrConstructor) {
  var LeafletMapElement = components.newElement();

  LeafletMapElement.createdCallback = function (document) {
    var L = components.onServer ? leafletOrConstructor(new components.dom.Window(), document) :
                                  leafletOrConstructor;

    var leafletContent = componentsStatic.forComponent("leaflet");
    var mapContent = componentsStatic.forComponent("leaflet-map");

    L.Icon.Default.imagePath = leafletContent.getUrl("images");
    componentsStatic.includeCSS(document, mapContent.getUrl("leaflet-map.css"));
    componentsStatic.includeCSS(document, leafletContent.getUrl("leaflet.css"));

    // Add client-side scripts too, for later potential interactivity
    componentsStatic.includeScript(document, "/server-components-for-web.js");
    componentsStatic.includeScript(document, leafletContent.getUrl("leaflet.js"));
    componentsStatic.includeScript(document, mapContent.getUrl("leaflet-map.js"));

    if (components.onServer) {
      // Server-side we need to explicitly specify a size to render, since we don't have a window.
      this.clientWidth = 500;
      this.clientHeight = 500;
    }

    [].slice.call(this.querySelectorAll(".leaflet-map-pane, .leaflet-control-container"))
                      .forEach(function (node) { node.remove() });

    var lat = this.getAttribute("lat");
    var long = this.getAttribute("long");
    var zoom = this.getAttribute("zoom");

    var options = components.onServer ? { zoomControl: false } : {};

    var map = L.map(this, options).setView([lat, long], zoom);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Show tiles immediately (either we're server-side, and we need to get to ready state, or
    // we know we've already got the tiles ready from our pre-load, and we don't want a FOUC)
    var tiles = [].slice.call(document.querySelectorAll(".leaflet-tile"));
    tiles.forEach((tile) => tile.onload());

    // Export these properties on the element, so subelements can easily interact with it.
    this.L = L;
    this.map = map;
  };

  components.registerElement("leaflet-map", { prototype: LeafletMapElement });
}));
