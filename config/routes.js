var path = require('path');

module.exports = function(app, passport, Cues, Fixtures, Patch, ChannelParameters) {

  //=================================================
  // User Get Routes ================================
  //=================================================
  app.get('/user/login', function(req, res){
    res.sendFile('login.html', { root: path.join(__dirname, '../public') });
  });

  app.get('/user/signup', function(req, res){
    res.sendFile('signup.html', { root: path.join(__dirname, '../public') });
  });

  app.get('/user/profile', isLoggedIn, function(req, res) {
    res.json({
      user: req.user // get the user out of session and pass to template
    });
  });

  //=================================================
  // User Post Routes ===============================
  //=================================================
  app.post('/user/signup', passport.authenticate('local-signup', {
    successRedirect: '/console',
    failureRedirect: '/user/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  app.post('/user/login', passport.authenticate('local-login', {
    successRedirect: '/console',
    failureRedirect: '/user/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));


  //=================================================
  // User Logout ====================================
  //=================================================
  app.get('/user/logout', function(req, res) {
    req.logout();
    res.redirect('/user/login');
  });


  //=================================================
  // API Get Routes =================================
  //=================================================
  app.get('/api/cues/', function(req, res) {

    // Always returns all cues.

    Cues.find({}).exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    })
  });

  app.get('/api/cues/:cue', function(req, res) {

    // Expects cue to be a number. Return one cue

    var cueNumber = req.params.cue;

    Cues.findOne({ 'cueNumer' : cueNumber }).exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    })
  });

  app.get('/api/fixtures/', function(req, res) {

    Fixtures.find({}).exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    })
  });

    app.get('/api/channels/', function(req, res) {

    ChannelParameters.find({}).exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    })
  });

  app.get('/api/fixtures/:fixture', function(req, res) {

    var fixtureName = req.params.fixture;

    Fixtures.findOne({ 'fixtureName': fixtureName }).exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    })
  });

  app.get('/api/patch/', function(req, res) {

    Patch.find({}).sort("startingChannel").exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    })
  });

  //=================================================
  // API Post Routes ================================
  //=================================================
  app.post('/api/cues/', function(req, res) {

    // Expects JSON { cueNumber: NUMBER, dmxSnapshot: [NUMBER] }

    var newCue = new Cues(req.body);

    newCue.save(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc._id);
      }
    });
  });

  app.post('/api/fixtures/', function(req, res) {

    // Expects JSON { fixtureName: STRING, channelParameters: [STRING] }

    var newFixture = new Fixtures(req.body);

    newFixture.save(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc._id);
      }
    });
  });

  app.post('/api/channels/', function(req, res) {

    // Expects JSON { name: STRING, default: NUMBER, catagory: STRING }

    var newChan = new ChannelParameters(req.body);

    newChan.save(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc._id);
      }
    });
  });
  
  app.post('/api/patch/', function(req, res) {

    // Expects JSON { fixtureName: STRING (ref fixtures), startingChannel: NUMBER (1-512) }

    var newPatch = new Patch(req.body);

    newPatch.save(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc._id);
      }
    });
  });

  //=================================================
  // API Delete Routes ==============================
  //=================================================
  app.delete('/api/cues/:cue', function(req, res) {
    // console.log(req.body);
    var cueNumber = req.params.cue;

    console.log(cueNumber);
    Cues.remove({ "cueNumber": cueNumber }).exec(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send("Deleted");
      }
    });
  });

  app.delete('/api/fixtures/:fixture', function(req, res) {
    // console.log(req.body);
    var fixtureName = req.params.fixtureName;

    Fixtures.remove({ "fixtureName": fixtureName }).exec(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send("Deleted");
      }
    });
  });

  app.delete('/api/patch/:patch', function(req, res) {
    // console.log(req.body);
    var startingChannel = req.params.patch;

    Patch.remove({ "startingChannel": startingChannel }).exec(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send("Deleted");
      }
    });
  });

  //=================================================
  // Home and Catch-All Routes ======================
  //=================================================
  app.get('/console', isLoggedIn, function(req, res) {
    res.sendFile('console.html', { root: path.join(__dirname, '../public') });
  });

  app.get('/*', function(req, res){
    res.redirect('/console');
  });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();
  // if they aren't redirect them to the home page
  res.redirect('/user/login');
}
