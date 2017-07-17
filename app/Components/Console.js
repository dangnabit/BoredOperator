//Require react
var React = require('react');
var Router = require('react-router');

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
        fixtures:[],
        liveView: []
    };
  },
  componentDidUpdate: function(){
    
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
                <LiveView />
                <SelectedFixture />
            </div>
            <Toolbar />
        </div>
      </div>
    )
  }
});

module.exports = Console;
