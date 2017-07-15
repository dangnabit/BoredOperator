//Require react
var React = require('react');
var Router = require('react-router');

//Bring in your Helpers and components
var helpers = require('../utils/helpers');
var CreateFixture = require('CreateFixture')

var Console = React.createClass({
  getInitialState: function(){
    
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
      <div className="console">
        <CreateFixture />
      </div>
    )
  }
});

module.exports = Console;
