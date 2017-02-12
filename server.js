var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res) {
  res.redirect('/index.html');
});

app.listen(8080, function () {
  console.log('app is listening on port 8080');
});
