//Require React
var React = require('react');
var Router = require('react-router');
var Console = require('./Console');
var Link = require("react-router").Link;
var socket = io.connect();

var Main = React.createClass({
  getInitialState: function(){
    return {
        liveView: []
    };
  },
  componentDidMount: function(){
    console.log('Test');
    socket.emit('dmx:request');
    socket.on('dmx:update', this.setLiveDmx);
  },
  setLiveDmx: function(data){
    this.setState({liveView : data});
    console.log(this.state.liveView);
  },
  
  socketEmit: function(data){
    socket.emit('dmx:update', data);
  },

  render: function(){
    // console.log(`State ${this.state.liveView}`);

    // var childrenWithProps = React.Children.map(this.props.children, function(child){
    //   // return React.cloneElement(child, {
    //   //   liveView: this.state.liveView
    //   // });
    //   console.log(child);
    // });

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
                <li id="navbar-links"><Link to="/admin">Admin</Link></li>
                <li id="navbar-links"><Link to="/">Console</Link></li>                
                <li id="navbar-links"><a href="/user/logout">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {React.cloneElement(this.props.children, {liveView: this.state.liveView, setDmx: this.socketEmit})}

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
