//Require React
var React = require('react');
var Router = require('react-router')

var LiveView = React.createClass({
  render: function(){
    
    if (!this.props.liveDMX.length) {
     var liveView = (
        <div className="col-md-12">
          <h3>
            <span><em>Nothing to see here... Move along...</em></span>
          </h3>
        </div>
      )
    } else if (this.props.liveDMX ) {
      var liveView = this.props.liveDMX.map(function(value, channel){
        var notNull = false;
        
        if (value !== null){
          notNull = true;
        }
        
        return(  
          <div key={channel}>
            {notNull ? <div className="col-xs-4 col-sm-3 col-md-2 col-lg-1 col-xl-1 live-button" >
              <button className="btn btn-lg btn-warning channelBtn">
                <p>
                  Ch: {channel + 1} <br/> {((value/255) * 100).toFixed(1)}%
                </p>
              </button> 
            </div> : null}
          </div>
        )
      }.bind(this))
    }

    return(
        <div className="dmx-row row">
          <p>DMX Live View   
            <span 
              className="glyphicon glyphicon-info-sign" 
              data-toggle="tooltip"  
              data-placement="top" 
              title="Your live DMX output is shown here. Percentages will update as you recall cues and adjust faders.">
            </span>
          </p>
          {liveView}
        </div>          
    )
  }
});

module.exports = LiveView;
