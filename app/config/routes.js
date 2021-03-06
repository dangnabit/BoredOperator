//Require React
var React = require('react');

//Require your router for routes
var router = require("react-router");
var Route = router.Route;

var Router = router.Router;

var IndexRoute = router.IndexRoute;

var hashHistory = router.hashHistory;

//Bring in all your components 
var Main = require('../Components/Main.js');
var Console = require('../Components/Console.js');
var Admin = require('../Components/Admin.js');

module.exports = (
  <Router history={hashHistory}>
  	<Route path='/' component={Main}>
      <Route path='admin' component={Admin}/>
      <IndexRoute component={Console}/>    
  	</Route>
  </Router>
);
