const React = require('react');

const FixtureForm = React.createClass({

	render: function(){
		return(
			<div>
				<form>
					<label htmlFor="fixtureName">Cue Number</label>
					<input type="text" name="cueNumber" value={this.state.cueNumber} onChange={this.handleCueNumberChange}/>
					<br />
					<label htmlFor="startingChannel"></label>
					<input type="text" name="dmxSnapshot" value={this.state.dmxSnapshot} onChange={this.handleDMXSnapshotChange}/>
					<br />
					<button onClick={this.fixtureFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
})

module.exports = FixtureForm;