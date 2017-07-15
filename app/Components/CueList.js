//Require React
var React = require('react');
var Router = require('react-router')

var Main = React.createClass({
  render: function(){

    return(
      <div className="col-md-2" id="cue-col">
        <p>Cues</p>
      </div>
    )
  }
});

module.exports = Main;
