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
        return(
            <div className="col-md-1" key={channel}>
              <li className="list-group-item" >
                <p>
                  Chan: {channel + 1} @ <br/> {value}
                </p>
              </li>
            </div>
        )
      }.bind(this))
    }

    return(
        <div className="dmx-row row">
          <p>DMX Live View</p>
          <ul>
            {liveView}
          </ul>
        </div>          
    )
  }
});

module.exports = LiveView;
