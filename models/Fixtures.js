// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FixtureSchema = new Schema({
  fixtureName: {
    type: String,
    trim: true,
    required: true
  },
  channelCount: {
    type: Number,
    trim: true,
    required: true
  },
  channelParameters: {
    type: String,
    trim: true,
    required: true
  }
});

// Create the Model
var Fixture = mongoose.model("Fixture", FixtureSchema);

// Export it for use elsewhere
module.exports = Fixture;
