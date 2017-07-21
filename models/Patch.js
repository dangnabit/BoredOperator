// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PatchSchema = new Schema({
  fixtureName: {
    type: String,
    trim: true,
    required: true
  },
  startingChannel: {
    type: Number,
    trim: true,
    required: true,
    unique: true
  },
  channelParameters: {
    type: [Schema.Types.Mixed],
    required: true
  }
});

// Create the Model
var Patch = mongoose.model("Patch", PatchSchema);

// Export it for use elsewhere
module.exports = Patch;
