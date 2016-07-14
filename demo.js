var express = require("express");
var app = express();

var html = `
<html>
<head></head>
<body>
    <leaflet-map lat="41.3947688" long="2.0787283" zoom="12"></leaflet-map>
</body>
</html>
`;

app.get('/', (req, res) => res.send(html));
app.listen(3000, () => console.log("Server listening on 3000"));
