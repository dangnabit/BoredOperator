module.exports = function(app, passport) {
  //Get route
  app.get('/login', function(req, res){
    res.sendFile('./public/login.html');
  });

  app.get('/api/cues/', function(req, res) {

    Cues.find({}).exec(function(err, doc) {
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

  app.get('/api/patch/', function(req, res) {

    Patch.find({}).exec(function(err, doc) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(doc);
      }
    })
  });

  //Post routes
  app.post('/api/cues/', function(req, res) {

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

  app.post('/api/patch/', function(req, res) {

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


  //Handles User Signup and login
  app.post('/user/signup', passport.authenticate('local-signup', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/user/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  app.post('/user/login', passport.authenticate('local-login', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/user/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  //Delete routes
  app.delete('/api/cues/', function(req, res) {
    // console.log(req.body);

    var cue = req.body.cue;

    Cues.remove({ "cue": cue }).exec(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send("Deleted");
      }
    });
  });

  app.delete('/api/fixtures/', function(req, res) {
    // console.log(req.body);

    var fixture = req.body.fixture;

    Fixtures.remove({ "fixture": fixture }).exec(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send("Deleted");
      }
    });
  });

  app.delete('/api/patch/', function(req, res) {
    // console.log(req.body);

    var patch = req.body.patch;

    Patch.remove({ "patch": patch }).exec(function(err, data) {
      if (err) {
        console.log(err);
      } else {
        res.send("Deleted");
      }
    });
  });

  app.get('/user/profile', isLoggedIn, function(req, res) {
    res.json({
      user: req.user // get the user out of session and pass to template
    });
  });

  // LOGOUT ==============================
  app.get('/user/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  //Home route
  app.get('*', isLoggedIn, function(req, res) {
    res.sendFile('./public/index.html');
  });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/login');
}
