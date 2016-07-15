var components = require("server-components");
require("../index.js");

var assert = require("power-assert");

describe("<leaflet-map> component", () => {
    it("renders map tiles", () => {
        return components.renderPage(`
            <html>
            <head></head>
            <body>
                <leaflet-map lat="41.3851" long="2.1734" zoom="12"></leaflet-map>
            </body>
            </html>
        `).then((output) => {
            assert(output.indexOf("leaflet-tile") > -1);
        });
    });
});
