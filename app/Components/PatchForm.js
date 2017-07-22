const React = require('react');

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
			selectedFixture: event.target.value
			
		})
	},

	handleChannelNumChange: function(event){
		this.setState({
			channelNum: event.target.value.trim()
		});
	},

	patchFormSubmit: function(event){
		event.preventDefault();
		if(this.state.fixtureName !== '' && this.state.channelNum !== ''){
			let formObj = {
				fixtureName: this.state.selectedFixture.fixtureName,
				channelParameters: this.state.selectedFixture.channelParameters,
				startingChannel: this.state.channelNum
			};
			this.props.patchFormSubmit(formObj);
			this.setState({
				selectedFixture: {},
				channelNum: ''
			})
		}
		
	},

	render: function(){
		let fixtureOptions = [];
		fixtureOptions.push(<option key={0} value=""></option>);
		let fixes = this.props.fixtures;
		console.log(fixes[0]);
		for(let ii = 0; ii < fixes.length; ii++ ){
			console.log(fixes[ii]);
			fixtureOptions.push(<option key={ii+1} value={fixes[ii]}> {fixes[ii].fixtureName} </option>);
		}
		return(
			<div>

				<form>
					<label htmlFor="fixtureName">Fixture Name</label>
					<select name="fixtureName" value={this.state.fixtureName} onChange={this.handleFixtureNameChange}>
						{fixtureOptions}
					</select>
					<br />
					<label htmlFor="startingChannel">Channel #</label>
					<input type="number" name="channelNum" min={1} max={512} value={this.state.channelNum} onChange={this.handleChannelNumChange}/>
					<br />
					<button className='btn btn-md btn-warning' onClick={this.patchFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}

})

module.exports = PatchForm;