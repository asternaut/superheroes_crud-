var express = require('express');
var Superhero = require('./models/superhero.js');
var Villain = require('./models/villains');
var app     = express();
var bodyParser = require('body-parser');
var path    = require('path');

var heroRoutes = require('./routes/superheroes')
var mongoose = require('mongoose');

// required to connect to our local database.
// it will look for/create a db called superheros
mongoose.connect("mongodb://localhost/superheroes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/superheroes', heroRoutes); // type this once by putting it here

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
});

var server  = app.listen(3001, function(){
  console.log('This server is 🔥🔥🔥 - PORT 3001');
});

module.exports = app;
