//Depenndencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require("morgan");
var passport = require('passport');
var flash    = require('connect-flash');

var Cues = require('./models/Cues.js');
var Fixtures = require('./models/Fixtures.js');
var Patch = require('./models/Patch.js');
var Users = require('./models/Users.js');

//PORT ENVIORNMENTS
var app = express();
var PORT = process.env.PORT || 3000;

require('./config/passport')(passport);
require('./config/routes.js')(app, passport);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Set the Public folder ass static
app.use(express.static('./public'));

//link to MongoDB
var link = 'mongodb://localhost/BoredOperator';
mongoose.Promise = Promise;
mongoose.connect(link);
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});


//APP LISTEN PORT
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
