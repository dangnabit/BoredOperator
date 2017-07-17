//Require React
var React = require('react');
var Router = require('react-router')

var SelectedFixture = React.createClass({
  render: function(){

    return(
      <div className="selected-fixture row">
        <p>Selected Fixture</p>
      </div>
    )
  }
});

module.exports = SelectedFixture;
