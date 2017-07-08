// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CueSchema = new Schema({
  CueNumber: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  dmxSnapshot: {
    type: String,
    trim: true,
    required: true
  }
});

// Create the Model
var Cue = mongoose.model("Cue", CueSchema);

// Export it for use elsewhere
module.exports = Cue;
