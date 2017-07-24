const React = require('react');
var helpers = require('../utils/helpers');

const PatchForm = React.createClass({

	/*
	/ Props
	/	- patchFormSubmit : function to get fixture and add it to patch in database( inherit from parent)
	/
	*/

	getInitialState: function(){
		return({
			selectedFixture: {},
			channelNum: '',
			isValid: false,
			badPatch: false
		})
	},

	handleFixtureNameChange: function(event){
		this.setState({
			selectedFixture: this.props.fixtures[event.target.value.trim()]
		});
	},

	handleChannelNumChange: function(event){
		if (this.state.selectedFixture.channelParameters.length > 0 && this.state.selectedFixture.channelParameters.length + parseInt(event.target.value.trim()) <= 512){
			this.setState({
				channelNum: parseInt(event.target.value.trim()),
				isValid: true,
				badPatch: false
			});
		} else if(event.target.value === '') {
			this.setState({
				channelNum: '',
				isValid: false,
				badPatch: false
			});
		}
		
		if (this.state.selectedFixture.channelParameters.length + parseInt(event.target.value.trim()) > 512){
			this.setState({
				badPatch:true
			});
		}


	},

	patchFormSubmit: function(event){
		event.preventDefault();
		
		if(this.state.fixtureName !== '' && this.state.channelNum !== '' && this.state.selectedFixture.channelParameters.length + parseInt(this.state.channelNum) <= 512){
			let formObj = {
				fixtureName: this.state.selectedFixture.fixtureName,
				startingChannel: this.state.channelNum,
				channelParameters: this.state.selectedFixture.channelParameters
			};
			this.props.patchFormSubmit(formObj);
			this.setState({
				selectedFixture: {},
				channelNum: '',
				isValid: false,
				badPatch: false
			});
			this.props.getPatch();
			helpers.reloadSlickSlider();
		}
	},

	render: function(){
		
		let fixtureOptions = [];
		fixtureOptions.push(<option key={0} value=""></option>);
		
		let fixtures = this.props.fixtures;
		// console.log(fixtures);
		
		for(let i = 0; i < fixtures.length; i++ ){
			// console.log(fixtures[i]);
			fixtureOptions.push(<option key={i+1} value={ i }> {fixtures[i].fixtureName} ({fixtures[i].channelParameters.length}) </option>);
		}
		
		return(
			<div>

				<form>
					<label htmlFor="fixtureName">Fixture Name: 
						<span 
							className="glyphicon glyphicon-info-sign" 
							data-toggle="tooltip" 
							data-placement="top" 
							title="Select a created fixture to patch!">
						</span>
					</label>
					<br/>
					<select name="fixtureName" value={this.state.fixtureName} onChange={this.handleFixtureNameChange} required>
						{fixtureOptions}
					</select>
					<br />
					<label htmlFor="startingChannel">Starting Channel: 
						<span 
							className="glyphicon glyphicon-info-sign" 
							data-toggle="tooltip" 
							data-placement="top" 
							title="Enter the patch channel. This number plus the fixture channel count cannot exceed 512.">
						</span>						
					</label>
					<input className="fixture-input" type="number" name="channelNum" min={1} max={512} value={this.state.channelNum} onChange={this.handleChannelNumChange} required/>
					<br />
					<button className='btn btn-md btn-warning' disabled={!this.state.isValid} onClick={this.patchFormSubmit}>Submit</button>
					{this.state.badPatch ? 
					<div className="alert alert-danger" role="alert">
						<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
  						<span className="sr-only">Error:</span> 
						Check your channel number. You can't patch across universes or on top of already patched channels.
					</div> 
					: null}
				</form>
			</div>
		)
	}
})

module.exports = PatchForm;




