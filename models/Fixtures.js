// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FixtureSchema = new Schema({
  fixtureName: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  channelParameters: {
    type: [String],
    required: true
  }
});

// Create the Model
var Fixture = mongoose.model("Fixture", FixtureSchema);

// Export it for use elsewhere
module.exports = Fixture;
