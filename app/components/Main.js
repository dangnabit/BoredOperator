const React = require('react');
const ReactDOM = require('react-dom');
const AddPatch = require('./AddPatch');
const helpers = require('../utils/helpers.js');
const Main = React.createClass({

	getInitialState: function(){
		return({
			clicked: false
		});
	},

	handleClick: function(){
		this.setState({
			clicked: !this.state.clicked
		});
	},

	patchFormSubmit: function(formBody){
		console.log(formBody)
		helpers.createPatch(formBody)
			.then( (response) =>{
				console.log(response)
			})
			.catch((err) =>{
				console.error(err);
				throw err;
			})

	},

	render: function(){
		return(
			<div>
				<AddPatch clicked={this.state.clicked} handleClick={this.handleClick} patchFormSubmit={this.patchFormSubmit}/>

			</div>
		)
	}

})

module.exports = Main;
