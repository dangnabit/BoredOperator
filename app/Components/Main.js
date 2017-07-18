//Require React
var React = require('react');
var Router = require('react-router');
var Console = require('./Console');

var Main = React.createClass({
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
                <li id="navbar-links"><a href="/admin">Admin</a></li>
                <li id="navbar-links"><a href="/user/logout">Logout</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {this.props.children}

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
