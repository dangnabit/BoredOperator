// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CueSchema = new Schema({
  cueNumber: {
    type: Number,
    trim: true,
    required: true,
    unique: true
  },
  dmxSnapshot: {
    type: [Number],
    required: true
  }
});

// Create the Model
var Cue = mongoose.model("Cue", CueSchema);

// Export it for use elsewhere
module.exports = Cue;
