var components = require("server-components");
require("./index.js");

var express = require("express");
var app = express();

var html = `
<html>
<head></head>
<body>
    <leaflet-map lat="41.3851" long="2.1734" zoom="12">
        <leaflet-marker lat="41.4036" long="2.1744"></leaflet-marker>
        <leaflet-marker lat="41.4225" long="2.1186"></leaflet-marker>
        <leaflet-marker lat="41.3640" long="2.1675"></leaflet-marker>

        <leaflet-polygon points="41.3854,2.1638 41.3911,2.1806 41.3865,2.2028 41.3615,2.1866 41.3810,2.1858 41.3733,2.1771 38.9826,1.3015">
        </leaflet-polygon>
    </leaflet-map>
</body>
</html>
`;

// Do an initial render before requests, to check whether it works
components.renderPage(html).then(() => {
    console.log("Initial render successful");
}).catch((err) => {
    console.error("Error on initial render", err);
});

// Start a server rendering on demand
app.get('/', (req, res) => components.renderPage(html)
                                     .then((output) => res.send(output))
                                     .catch((err) => res.status(500).send(`Failed:<br/>${err}`)));
app.use(express.static('.'));
app.listen(3000, () => console.log("Server listening on 3000"));
