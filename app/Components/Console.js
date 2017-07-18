//Require react
var React = require('react');
var Router = require('react-router');

//Bring in your Helpers and components
var helpers = require('../utils/helpers');
var Toolbar = require('./Toolbar');
var CueList = require('./Cuelist');
var LiveView = require('./LiveView');
var SelectedFixture = require('./SelectedFixture');
const SlickSlider = require('./SlickSlider');

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
  componentDidUpdate: function(){
    
  },
  handleSubmit: function(item, event){
    // console.log(item);
  },
  handleChange: function(event){
    
  },
  render: function(){  
    let sliderPatch_DEMOINFO = [{
      startingChannel: 1,
      channels: [{
        channelParamName: "Pan",
        DefaultDMX: 128
      },{
        channelParamName: "Red",
        DefaultDMX: 128
      }, {
        channelParamName: "Blue",
        DefaultDMX: 128
      },{
        channelParamName: "Green",
        DefaultDMX: 128
      }]
    }, {
      startingChannel: 5,
      channels: [{
        channelParamName: 'Pan',
        DefaultDMX: 128,
      },{
        channelParamName: 'Zoom',
        DefaultDMX: 255
      },{
        channelParamName: 'RGB',
        DefaultDMX: 128
      }]
    }];
    let newpatchArray = [sliderPatch_DEMOINFO];
    return(
      <div className="container-fluid">
        <div className="row" id="main-page-row">
            <CueList cues={this.state.cues}/>
            <div className="col-md-8" id="live-view">
                <LiveView liveDMX={this.state.liveView}/>
                {/*<SelectedFixture fixture={selectedFixture}/> */}
            </div>
            <Toolbar liveDMX={this.state.liveView}/>
        </div>
        <div className="row" >
            <SlickSlider patches={sliderPatch_DEMOINFO} />
        </div>
      </div>
    )
  }
});

module.exports = Console;
