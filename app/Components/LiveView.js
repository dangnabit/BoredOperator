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
            {notNull ? <div className="col-md-1" >
              <button className="btn btn-lg btn-warning channelBtn">
                <p>
                  Chan: {channel + 1} <br/> {((value/255) * 100).toFixed(1)}%
                </p>
              </button> 
            </div> : null}
          </div>
        )
      }.bind(this))
    }

    return(
        <div className="dmx-row row">
          <p>DMX Live View</p>
          {liveView}
        </div>          
    )
  }
});

module.exports = LiveView;
