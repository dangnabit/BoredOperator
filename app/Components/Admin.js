//Require react
var React = require('react');
var Router = require('react-router');
var socket = io.connect();

//Bring in your Helpers and components
var helpers = require('../utils/helpers');
var Toolbar = require('./ToolBar');
var CueList = require('./CueList');
var LiveView = require('./LiveView');
var SelectedFixture = require('./SelectedFixture');

var Admin = React.createClass({
  getInitialState: function(){
    return {
        cues: [],
        patch: [],
        fixtures: [],
        selectedFixture: {},
        channelParameters: []
    };
  },
  componentDidMount: function(){
    this.getCues();
    this.getPatch();  
    this.getFixtures();
    this.getChannelParameters();
  },

  getCues: function(){
    helpers.getCues()
      .then(function(cueData) {
        // console.log(cueData.data);
        if (cueData.data) {
          this.setState({
            cues: cueData.data
          });
        }
        // console.log(this.state.cues);
      }.bind(this));
  },

  getPatch: function(){
    helpers.getPatch()
      .then(function(patchData) {
        // console.log(patchData.data);
        if (patchData.data) {
          this.setState({
            patch: patchData.data
          });
          if (this.props.liveView.length < 1){
            helpers.generateLiveView(this.state.patch, this.props.setDmx);
          }
          helpers.startSlickSlider();
        }
        // console.log(this.state.patch);
      }.bind(this));
  },
  
  getFixtures: function(){
    helpers.getFixtures()
      .then(function(fixturesData) {
        // console.log(fixturesData.data);
        if (fixturesData.data) {
          this.setState({
            fixtures: fixturesData.data
          });
        }
        // console.log(this.state.fixtures);
      }.bind(this));
  },

  getChannelParameters: function(){
    helpers.getChannelParameters()
      .then(function(channelParametersData) {
        // console.log(channelgetChannelParametersData.data);
        if (channelParametersData.data) {
          this.setState({
            channelParameters: channelParametersData.data
          });
        }
        // console.log(this.state.channelgetChannelParameters);
      }.bind(this));
  },

  handleSubmit: function(item, event){
    // console.log(item);
  },
  handleChange: function(event){
    
  },
  render: function(){  
    // console.log(this.props.liveView);
    return(
      <div className="container-fluid">
        <div className="row" id="main-page-row">
            <p>Admin Console</p>
			
        </div>
      </div>
    )
  }
});

module.exports = Admin;
