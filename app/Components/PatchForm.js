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
			channelNum: ''
		})
	},

	handleFixtureNameChange: function(event){
		this.setState({
			selectedFixture: this.props.fixtures[event.target.value.trim()]
		});
	},

	handleChannelNumChange: function(event){
		this.setState({
			channelNum: parseInt(event.target.value.trim())
		});
	},

	patchFormSubmit: function(event){
		event.preventDefault();
		
		if(this.state.fixtureName !== '' && this.state.channelNum !== ''){
			let formObj = {
				fixtureName: this.state.selectedFixture.fixtureName,
				startingChannel: this.state.channelNum,
				channelParameters: this.state.selectedFixture.channelParameters
			};
			this.props.patchFormSubmit(formObj);
			this.setState({
				selectedFixture: {},
				channelNum: ''
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
					<label htmlFor="fixtureName">Fixture Name: </label>
					<select name="fixtureName" value={this.state.fixtureName} onChange={this.handleFixtureNameChange}>
						{fixtureOptions}
					</select>
					<br />
					<label htmlFor="startingChannel">Starting Channel: </label>
					<input className="fixture-input" type="number" name="channelNum" min={1} max={512} value={this.state.channelNum} onChange={this.handleChannelNumChange}/>
					<br />
					<button className='btn btn-md btn-warning' onClick={this.patchFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
})

module.exports = PatchForm;




