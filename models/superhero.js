var mongoose = require('mongoose');

// blueprint constructor
var SuperheroSchema = new mongoose.Schema({
  name: { required: true, type: String },
  superpowers: [{ type: String }],
  universe: String,
  evil: Boolean,
  img: String,
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
});

// Mongoose methods
SuperheroSchema.methods.loadData = function(data) {
  this.name       = data.name ? data.name : this.name;
  this.universe   = data.universe ? data.universe : this.universe;
  this.evil       = data.evil ? data.evil : this.evil;
  this.img        = data.img ? data.img : this.img;
}

// Array method
SuperheroSchema.methods.loadPower = function(powerN) {
  this.superpowers.push(powerN);
}

module.exports = mongoose.model('Superhero', SuperheroSchema);
