var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo/index');
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('refridgerraider_5a4e8c2fe4b038fa76c0cb61', 'a31eb21a-d1de-4cac-9150-9dc378c92bb9');

var sampleData = require('../database-mongo/sample_data')

var app = express();

// UNCOMMENT FOR REACT
 app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/storage', function (req, res) {
  sampleData.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

