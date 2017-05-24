const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  content: {required: true, type: String},
});

//attach method to NoteSchema
NoteSchema.methods.loadData = function(data){
  this.content = data.content;
}

//export
module.exports = mongoose.model('Note', NoteSchema);
