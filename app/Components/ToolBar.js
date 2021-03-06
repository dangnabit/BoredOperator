//Require React
var React = require('react');
var Router = require('react-router')
const AddPatch = require('./AddPatch.js');
const AddFixture = require('./AddFixture.js');
const AddCue = require('./AddCue.js');
const helpers = require('../utils/helpers.js');


var ToolBar = React.createClass({


	getInitialState: function(){
		return({
			patch_clicked: false,
			fixture_clicked: false,
			cue_clicked: false
		});
	},

	handlePatchClick: function(){
		this.setState({
			patch_clicked: !this.state.patch_clicked,
			fixture_clicked: false,
			cue_clicked: false
		});
	},

	handleCueClick: function(){
		this.setState({
			patch_clicked: false,
			fixture_clicked: false,
			cue_clicked: !this.state.cue_clicked,

		})
	},

	handleFixtureClick: function(){
		this.setState({
			patch_clicked: false,
			fixture_clicked: !this.state.fixture_clicked,
			cue_clicked: false
		})
	},

	patchFormSubmit: function(formBody){
		// console.log(formBody)
		helpers.createPatch(formBody)
			.then( (response) =>{
				console.log(response)
			})
			.catch((err) =>{
				console.error(err);
				throw err;
			});
	},

	fixtureFormSubmit: function(formBody){
		helpers.createFixture(formBody).then( (response) =>{
			console.log(response);
			this.props.getFixtures();
		})
		.catch( (err) =>{
			if(err.status === 404){
				console.error(`Resource not found`)
			}
		});
	},

	cueFormSubmit: function(cueNumber){
		let newCue = {
			cueNumber: parseInt(cueNumber),
			dmxSnapshot: this.props.liveDMX
		}
		// console.log(newCue);
		helpers.createCue(newCue).then( (response) =>{
			// console.log(response);
			this.props.getCues();
		})
		.catch( (err) =>{
			if(err.status === 404){
				console.error(`Resource not found`)
			}
		});

	},
	render: function(){
	return(
	  <div className="col-md-2" id="nav-col">
	    <p>Toolbar   
			<span 
				className="glyphicon glyphicon-info-sign" 
				data-toggle="tooltip" 
				data-placement="top" 
				title="Click the buttons below to get fixtures loaded and save cues to the system.">
			</span>
		</p>
	    <AddPatch 
			patch={this.props.patch}
			clicked={this.state.patch_clicked} 
			handleClick={this.handlePatchClick} 
			patchFormSubmit={this.patchFormSubmit}
			fixtures={this.props.fixtures}
			getPatch={this.props.getPatch}
			liveDMX={this.props.liveDMX}
		/>
	    <AddFixture 
			clicked={this.state.fixture_clicked} 
			handleClick={this.handleFixtureClick} 
			formSubmit={this.fixtureFormSubmit}
			channelParameters= {this.props.channelParameters} 
			getFixtures={this.props.getFixtures}
			fixtures={this.props.fixtures}
		/>
		<AddCue  
			clicked={this.state.cue_clicked} 
			handleClick={this.handleCueClick} 
			formSubmit={this.cueFormSubmit}
			cues={this.props.cues}
		/>
	  </div>
	)
	}
});

module.exports = ToolBar;
