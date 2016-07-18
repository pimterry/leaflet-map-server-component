var componentsStatic = require('server-components-static');
var resolvePkg = require("resolve-pkg");

require("server-components").onServer = true;

// Configure path for this component's static content
var mapContent = componentsStatic.forComponent("leaflet-map");
mapContent.setPath(__dirname);

// Make /components/leaflet/* map to leaflet's resources.
var leafletContent = componentsStatic.forComponent("leaflet");
leafletContent.setPath(resolvePkg("leaflet"), "dist");

// Load the component components
require("./leaflet-map");
require("./leaflet-marker");
