var mongoose = require('mongoose');

//blueprint constructor
var VillainSchema = new mongoose.Schema({
  name: String,
  superpowers: {default: [], type: Array},
  universe: String,
  evil: {default: true, type: Boolean},
  nemesis: String
});

VillainSchema.methods.loadData = function(data){
  this.name        = data.name ? data.name : this.name;
  this.superpowers = data.superpowers ? data.superpowers : this.superpowers;
  this.universe    = data.universe ? data.universe : this.universe;
  this.evil        = data.evil ? data.evil : this.evil;
  this.nemesis     = data.nemesis ? data.nemesis : this.nemesis;
}

VillainSchema.methods.loadPower = function(powerN) {
  this.superpowers.push(powerN);
}

module.exports = mongoose.model('Villain', VillainSchema);
