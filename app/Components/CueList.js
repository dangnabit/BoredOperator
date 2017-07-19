//Require React
var React = require('react');
var Router = require('react-router')

var CueList = React.createClass({
  
  handleClick: function (){
  	console.log(this)
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
              <li className="cue-list-item" >
                <button className="btn btn-warning btn-lg" onClick={this.handleClick.bind(this, cue)}>Cue:
                  <span><em>{cue.cueNumber}</em></span>
                </button>
              </li>
            </div>
        )
      }.bind(this))
    }

    return(
      <div className="col-md-2" id="cue-col">
        <p>Cues</p>
        {cues}
      </div>
    )
  }
});

module.exports = CueList;