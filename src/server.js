let express = require("express");
let app = express();

app.use(function(req, res, next) {
    console.log("New Connection");
});

app.use(express.static("static/"));

app.listen(1660, function() {
    console.log("Serving Static on 1660");
});