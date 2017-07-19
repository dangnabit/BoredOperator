//Require react
var React = require('react');
var Router = require('react-router');
var socket = io.connect();

//Bring in your Helpers and components
var helpers = require('../utils/helpers');
var Toolbar = require('./Toolbar');
var CueList = require('./Cuelist');
var LiveView = require('./LiveView');
var SelectedFixture = require('./SelectedFixture');

var Console = React.createClass({
  getInitialState: function(){
    return {
        cues: [],
        patch: [],
        fixtures: [],
        selectedFixture: {}
    };
  },
  componentDidMount: function(){
    helpers.getCues()
      .then(function(cueData) {
        console.log(cueData.data);
        if (cueData.data) {
          this.setState({
            cues: cueData.data
          });
        }
        console.log(this.state.cues);
      }.bind(this));

      helpers.getPatch()
      .then(function(patchData) {
        console.log(patchData.data);
        if (patchData.data) {
          this.setState({
            patch: patchData.data
          });
        }
        console.log(this.state.patch);
      }.bind(this));

      helpers.getFixtures()
      .then(function(fixtureData) {
        console.log(fixturesData.data);
        if (fixturesData.data) {
          this.setState({
            fixtures: fixturesData.data
          });
        }
        console.log(this.state.fixtures);
      }.bind(this));
  },
  handleSubmit: function(item, event){
    // console.log(item);
  },
  handleChange: function(event){
    
  },
  render: function(){  
    console.log(this.props.liveView);
    return(
      <div className="container-fluid">
        <div className="row" id="main-page-row">
            <CueList cues={this.state.cues}/>
            <div className="col-md-8" id="live-view">
                <LiveView liveDMX={this.props.liveView}/>
                <SelectedFixture fixture={this.state.selectedFixture}/>
            </div>
            <Toolbar liveDMX={this.props.liveView}/>
        </div>
      </div>
    )
  }
});

module.exports = Console;
