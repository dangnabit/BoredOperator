// Include the Mongoose Dependencies
var mongoose = require("mongoose");
var bcrypt   = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

// methods ======================
// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// Create the Model
var User = mongoose.model("User", UserSchema);

// Export it for use elsewhere
module.exports = User;
