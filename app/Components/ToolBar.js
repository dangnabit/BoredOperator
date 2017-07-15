//Require React
var React = require('react');
var Router = require('react-router')

var ToolBar = React.createClass({
  render: function(){

    return(
      <div className="col-md-2" id="nav-col">
        <p>ToolBar</p>
        <button className="btn btn-warning btn-lg" type="submit" id="createCueBtn">Create Cue</button>
        <button className="btn btn-warning btn-lg" type="submit" id="createFixtureBtn">Create Fixture</button>
        <button className="btn btn-warning btn-lg" type="submit" id="patchFixtureBtn">Patch Fixture</button>
      </div>
    )
  }
});

module.exports = ToolBar;
