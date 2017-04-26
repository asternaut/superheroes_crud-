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

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req,res){
  res.render('index')
});

app.get('/superheroes', function(req,res){
  res.render('superheroes')
});

app.get('/villains', function(req,res){
  res.render('villains')
});

app.use('/api/superheroes', heroRoutes); // type this once by putting it here

var server  = app.listen(3000, function(){
  console.log('Server tuned into PORT 3000');
});

module.exports = app;
