var express = require('express');
var path = require('path');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.use(express.static(path.join(__dirname, '/')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


// // Listen for requests
// var server = app.listen(app.get('port'), function() {
//   var port = server.address().port;
//   console.log('Magic happens on port ' + port);
// });