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
<<<<<<< HEAD
      <div className="col-md-2" id="cue-col">
        <p>Cues   <span className="glyphicon glyphicon-info-sign" data-toggle="tooltip" data-placement="top" data-placement="true" title="This is where your saved cues will show up. Press any of the buttons to recall the cue."></span></p>
        {cues}
=======
      <div className="col-md-2">
        <p>Cues</p>
        <div id="cue-col">
          {cues}
        </div>
>>>>>>> 853c32fe7b9baff770e0b57f76ccf90ffde94cd3
      </div>
    )
  }
});

module.exports = CueList;