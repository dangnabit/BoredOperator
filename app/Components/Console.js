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
        liveView: [],
        selectedFixture: {}
    };
  },
  componentDidMount: function(){
    socket.on('dmx:update', this.setLiveDmx);
  },
  setLiveDmx: function(data){
    this.setState({liveView : data});
    console.log(`DMX UPDATED ${data}`);
  },
  handleSubmit: function(item, event){
    // console.log(item);
  },
  handleChange: function(event){
    
  },
  render: function(){  
    return(
      <div className="container-fluid">
        <div className="row" id="main-page-row">
            <CueList cues={this.state.cues}/>
            <div className="col-md-8" id="live-view">
                <LiveView liveDMX={this.state.liveView}/>
                <SelectedFixture fixture={this.state.selectedFixture}/>
            </div>
            <Toolbar liveDMX={this.state.liveView}/>
        </div>
      </div>
    )
  }
});

module.exports = Console;
