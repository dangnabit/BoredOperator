//Require React
var React = require('react');
var Router = require('react-router')
var helpers = require('../utils/helpers');


var CueList = React.createClass({
  
  handleClick: function (item, event){
    // console.log(item.dmxSnapshot);
    var currentDMX= this.props.liveDMX;

    for (var i = 0; i < item.dmxSnapshot.length; i++) {
      if(item.dmxSnapshot !== null && currentDMX[i] !== null){
        currentDMX[i] = item.dmxSnapshot[i];
      }
    }


    this.props.setDmx(currentDMX);
  },

  deleteCue: function(item, event){
    helpers.deleteCue(item.cueNumber, this.props.getCues);
  },

  render: function(){

  	if (this.props.cues.length < 1) {
      var cues = (
        <div>
            <h4><span><em>You dont have any cues yet</em></span></h4>
        </div>
      )
    } else if (this.props.cues ) {
      var cues = this.props.cues.map(function(cue, index){
        return(
            <div key={index}>
              <div className="btn-group cueBtn" role="group" aria-label="...">
                <button className="btn btn-danger btn-lg delete-cue" onClick={this.deleteCue.bind(this, cue)}>
                  <span className="glyphicon glyphicon-remove-sign" ></span>
                </button>
                <button className="btn btn-warning btn-lg run-cue" onClick={this.handleClick.bind(this, cue)}>Cue:
                  <span><em>{cue.cueNumber}</em></span>
                </button>
              </div>
            </div>
        )
      }.bind(this))
    }

    return(
      <div className="col-md-2">
        <p>Cues  
          <span 
            className="glyphicon glyphicon-info-sign tool-tip" 
            data-toggle="tooltip" 
            data-placement="top" 
            data-animation="true"
            title="This is where your saved cues will show up. Press any of the buttons to recall the cue.">
          </span> 
        </p>
        <div id="cue-col">
          {cues}
        </div>
      </div>
    )
  }
});

module.exports = CueList;