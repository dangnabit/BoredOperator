//Depenndencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require("morgan");

var Cues = require('./models/Cues.js');
var Fixtures = require('./models/Fixtures.js');
var Patch = require('./models/Patch.js');
var Users = require('./models/Users.js');


//PORT ENVIORNMENTS
var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Set the Public folder ass static
app.use(express.static('./public'));

//link to MongoDB
var link = 'mongodb://localhost/BoredOperator';
mongoose.Promise = Promise;
mongoose.connect(link);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

//Get route
app.get('/api/cues/', function(req, res) {

  Cues.find({}).exec(function(err, doc){
      if(err){
        console.log(err);
        res.send(err);
      }
      else {
        res.send(doc);
      }
    })
});

//Post routes
app.post('/api/cues/', function(req, res){

  var newCue = new Cues(req.body);

  newCue.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.send(doc._id);
    }
  });
});

//Delete routes
app.delete('/api/cues/', function(req, res){
  // console.log(req.body);

  var cue = req.body.cue;

  Cues.remove({"cue": cue}).exec(function(err, data){
    if(err){
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

//Home route
app.get('*', function(req, res){
  res.sendFile('./public/index.html');
});

//APP LISTEN PORT
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
