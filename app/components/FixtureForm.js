const React = require('react');

const FixtureForm = React.createClass({

	getInitialState: function(){
		return({
			fixtureName: '',
			channelParameters: ''
		});
	},


	handleFixtureNameChange: function(event){
		this.setState({
			fixtureName: event.target.value.trim()
		})
	},

	handleChannelParametersChange: function(event){
		this.setState({
			channelParameters: event.target.value.trim().split(',')
		})
	},

	render: function(){
		return(
			<div>
				<form>
					<label htmlFor="fixtureName">Fixture Name: </label>
					<input type="text" name="cueNumber" value={this.state.fixtureName} onChange={this.handleFixtureNameChange}/>
					<br />
					<label htmlFor="channelParameters">Channel Parameters</label>
					<input type="text" name="channelParameters" value={this.state.channelParameters} onChange={this.handleChannelParametersChange}/>
					<br />
					<button onClick={this.fixtureFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
})

module.exports = FixtureForm;