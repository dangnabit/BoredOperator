//Require react
var React = require('react');
var Router = require('react-router');

//Bring in your Helpers
var helpers = require('../utils/helpers');

var CreateFixture = React.createClass({
  getInitialState: function(){
    return {
        channelCount : 1
    }
  },
  componentDidUpdate: function(){
    
  },
  handleSubmit: function(item, event){
    // console.log(item);
    this.props.onSubmit(item);
  },
  handleChange: function(event){
    console.log(event);
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },
  render: function(){
    
    return(
      <div className="modal">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title"><strong>Create a Fixture</strong></h1>
          </div>
          <div className="panel-body">
            Fixture Name: <input type="text" name='fixtureName'/>
            Channel Count: <input type='number' name='channelCount' id='channelCount' onChange={this.handleChange} />
            <ul className="channelParameters">
              {/* <ChannelParams channelCount={this.state.channelCount} /> */}
            </ul>
          </div>
          <div className="panel-footer">
              <button className='btn btn-lg btn-success' id='submitFixture' onClick={this.handleClick}>Apply</button>
          </div>
        </div>
      </div>

    )
  }
});

module.exports = CreateFixture;
