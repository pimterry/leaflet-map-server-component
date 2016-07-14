var components = require("server-components");
require("./index.js");

var express = require("express");
var app = express();

app.get('/', (req, res) => {
    components.renderPage(`
        <html>
        <head></head>
        <body>
            <leaflet-map lat="41.3947688" long="2.0787283" zoom="12"></leaflet-map>
        </body>
        </html>`
    ).then((html) => res.send(html));
});
app.listen(3000, () => console.log("Server listening on 3000"));
