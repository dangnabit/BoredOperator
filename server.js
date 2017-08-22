//Depenndencies
var express = require('express');
var app = express();


var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require("morgan");
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser'); 


var Cues = require('./models/Cues.js');
var Fixtures = require('./models/Fixtures.js');
var Patch = require('./models/Patch.js');
var Users = require('./models/Users.js');
var ChannelParameters = require('./models/ChannelParameters.js');


var PORT = process.env.PORT || 3000;

// Configuration for ArtNet
var artnetOptions = {
  host: '2.0.0.1',
  // host: '127.0.0.1',
  port: 6454,
  // refresh: 60,
  sendAll: true
}
var artnet = require('artnet')(artnetOptions);

//Set the Public folder as static
app.use(express.static(__dirname + '/public'));

require('./config/passport.js')(passport);

app.use(session({ 
  secret: 'bigbadBoredOperator',
  resave: true,
  saveUninitialized: true
 })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());

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

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

// External Routes
require('./config/routes.js')(app, passport, Cues, Fixtures, Patch, ChannelParameters, artnet);

var http = require('http').Server(app);
var io = require('socket.io')(http);

// Socket.io implementation

var dmxValues = [];

io.on('connection', function(socket) {
  
  io.emit('dmx:update', dmxValues);

  socket.on('dmx:request', function(){
    io.emit('dmx:update', dmxValues)
  }),

  socket.on('dmx:update', function(dmxChanged) {
    dmxValues = dmxChanged;
    io.emit('dmx:update', dmxValues);
    artnet.set(dmxValues);
  });

  socket.on('dmx:singleChan', function(data){
    var channel = data.channel;
    var value = data.dmx;
    // console.log(data);
    
    if (value > 255){
			value = 255;
		} else if(value < 0){
			value = 0;
    }
    
    dmxValues[channel-1] = value;
    io.emit('dmx:update', dmxValues);
    artnet.set(channel, value);
  });

  socket.on('disconnect', function(disconnect) {
    io.emit('user disconnected');
  });

});

//APP LISTEN PORT
http.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
