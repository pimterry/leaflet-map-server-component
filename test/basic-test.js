var components = require("server-components");
require("../index.js");

var assert = require("power-assert");

describe("<leaflet-map> component", () => {
    it("renders map tiles", () => {
        return components.renderPage(`
            <leaflet-map lat="41.3851" long="2.1734" zoom="12"></leaflet-map>
        `).then((output) => {
            assert(output.indexOf("leaflet-tile") > -1);
        });
    });

    it("renders map markers", () => {
        return components.renderPage(`
            <leaflet-map lat="41.3851" long="2.1734" zoom="12">
                <leaflet-marker lat="41.4036" long="2.1744"></leaflet-marker>
            </leaflet-map>
        `).then((output) => {
            assert(output.indexOf("leaflet-marker-icon") > -1);
        });
    });
});
