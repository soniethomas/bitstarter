var express = require('express');
var fs = require("fs");

var indexFile = "index.html";

var data = fs.readFileSync(indexFile);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("" + data);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
