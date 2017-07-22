//Require React
var React = require('react');
var Router = require('react-router')


var CueList = React.createClass({
  
  handleClick: function (item, event){
    console.log(item.dmxSnapshot);
    
    this.props.setDmx(item.dmxSnapshot);
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
              
                <button className="btn btn-warning btn-lg cueBtn" onClick={this.handleClick.bind(this, cue)}>Cue:
                  <span><em>{cue.cueNumber}</em></span>
                </button>
              
            </div>
        )
      }.bind(this))
    }

    return(
      <div className="col-md-2">
<<<<<<< HEAD
        <p>Cues <span className="glyphicon glyphicon-info-sign tool-tip" data-toggle="tooltip" data-placement="top" data-placement="true" title="This is where your saved cues will show up. Press any of the buttons to recall the cue."></span> </p>
=======
        <p>Cues 
          <span 
            className="glyphicon glyphicon-info-sign tool-tip" 
            data-toggle="tooltip" 
            data-placement="top" 
            data-animation="true"
            title="This is where your saved cues will show up. Press any of the buttons to recall the cue.">
          </span> 
        </p>
>>>>>>> 76f0aa683d422b3532c0d1a3ad375f8f61a20b02
        <div id="cue-col">
          {cues}
        </div>
      </div>
    )
  }
});

module.exports = CueList;