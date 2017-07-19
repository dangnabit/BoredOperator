// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ChannelParametersSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  default: {
    type: Number,
    trim: true,
    required: true
  },
  catagory: {
    type: String,
    required: true
  }
});

// Create the Model
var ChannelParameters = mongoose.model("ChannelParameters", ChannelParametersSchema);

// Export it for use elsewhere
module.exports = ChannelParameters;
