const React = require('react');

const CueForm = React.createClass({

	render: function(){
		return(
			<div>
				<form>
					<label htmlFor="cueNumber">Cue Number</label>
					<input type="text" name="cueNumber" value={this.state.cueNumber} onChange={this.handleCueNumberChange}/>
					<br />
					<label htmlFor="dmxSnapshot">DMX Snapshot (CSV)</label>
					<input type="text" name="dmxSnapshot" value={this.state.dmxSnapshot} onChange={this.handleDMXSnapshotChange}/>
					<br />
					<button onClick={this.cueFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
})

module.exports = CueForm;