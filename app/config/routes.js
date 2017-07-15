//Require React
var React = require('react');

//Require your router for routes
var router = require("react-router");
var Route = router.Route;

var Router = router.Router;

var IndexRoute = router.IndexRoute;

var hashHistory = router.hashHistory;

//Bring in all your components 
var Main = require('../components/Main');
var CreateFixture = require('../components/CreateFixture');

module.exports = (
  <Router history={hashHistory}>
  	<Route path='/' component={CreateFixture}>
  	</Route>
  </Router>
);
