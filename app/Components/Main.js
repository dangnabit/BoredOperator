//Require React
var React = require('react');
var Router = require('react-router');
var Console = require('./Console');
var Link = require("react-router").Link;
var socket = io.connect();
var helpers = require('../utils/helpers');

var Main = React.createClass({
  
  getInitialState: function(){
    return {
        liveView: [],
        host: '2.0.0.1',
        port: '6454'
    };
  },
  
  componentDidMount: function(){
    socket.emit('dmx:request');
    socket.on('dmx:update', this.setLiveDmx);
    helpers.tooltipHelper();
    navigator.requestMIDIAccess()
      .then(function(access){
        var inputs = access.inputs.values();
        var outputs = access.outputs.values();


      	function onMIDIMessage(event){
          var str = "chan: " + event.data[1] + " ::: value: " + event.data[2];
          // for (var i = 1; i < event.data.length; i++) {
          //   str += event.data[i] + " ";
          // }
          var data = {
            channel: parseInt(event.data[1]),
            dmx: parseInt(event.data[2] * 2)
          }
          console.log(data);
          socket.emit("dmx:singleChan", data);
  	    }

        access.inputs.forEach( function(entry){
          entry.onmidimessage = onMIDIMessage;
        });

        access.onstatechange= function(e){
          console.log(e.port.name, e.port.manufacturer, e.port.state);
        }
    });
  },
  
  setLiveDmx: function(data){
    this.setState({liveView : data});
    // console.log(this.state.liveView);
  },
  
  socketEmit: function(data){
    socket.emit('dmx:update', data);
  },

  socketEmitOne: function(chan, value){
    var data = {
      channel: chan,
      dmx: value
    };

    socket.emit('dmx:singleChan', data);
  },

  handleChange: function(event){
    // this.setState({
    //   [event.target.name] : event.tartget.value
    // });
    console.log(event);
  },

  setHostandPort: function(){
    helpers.setHostandPort(this.state.host, this.state.port);
  },

  render: function(){

    return(
      <div className="main-container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#" style={{color: "#FF9900", fontWeight: "bold"}}>BoredOperator</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown" id="navbar-links">
                  <a className="dropdown-toggle" href="#" data-toggle="dropdown">Admin</a>
                  <div className="dropdown-menu">
                    <form className="form" id="adminTools"> 
                      <input name="host" id="host" type="text" placeholder={this.state.host} onChange={this.handleHostChange}/> 
                      <input name="port" id="port" type="port" placeholder={this.state.port} onChange={this.handlePortChange}/><br/>
                      <button type="button" id="setHost" className="btn btn-lg btn-warning" onClick={this.setHostandPort}>Set Host/Port</button>
                    </form>
                  </div>
                </li>
                <li id="navbar-links"><Link to="/">Console</Link></li>                
                <li id="navbar-links"><a href="/user/logout">Logout</a></li>
              </ul>
              
            </div>
          </div>
        </nav>

        {React.cloneElement(this.props.children, 
          {
            liveView: this.state.liveView, 
            setDmx: this.socketEmit,
            setDmxOne: this.socketEmitOne
          }
        )}

        <footer className="footer">
          <div className="container-fluid">
            <p id="footer-text"> &copy; <a href="https://github.com/dangnabit/BoredOperator">BoredOperator 2017</a></p>
          </div>
        </footer>
      </div>
    )
  }
});

module.exports = Main;
