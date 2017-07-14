const React = require('react');
const ReactDOM = require('react-dom');
const AddPatch = require('./AddPatch.js');
const AddFixture = require('./AddFixture.js');
const AddCue = require('./AddCue.js');
const helpers = require('../utils/helpers.js');
const Toolbar = React.createClass({

	getInitialState: function(){
		return({
			patch_clicked: false,
			fixture_clicked: false,
			cue_clicked: false

		});
	},

	handlePatchClick: function(){
		this.setState({
			patch_clicked: !this.state.patch_clicked
		});
	},

	handleCueClick: function(){
		this.setState({
			cue_clicked: !this.state.patch_clicked
		})
	},

	handleFixtureClick: function(){
		this.setState({
			fixture_clicked: !this.state.fixture_clicked
		})
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
				<AddPatch clicked={this.state.patch_clicked} handleClick={this.handlePatchClick} patchFormSubmit={this.patchFormSubmit}/>
				<AddFixture clicked={this.state.fixture_clicked} handleClick={this.handleFixtureClick} />
				<AddCue  clicked={this.state.cue_clicked} handleClick={this.handleCueClick} />

			</div>
		)
	}

})

module.exports = Toolbar;
