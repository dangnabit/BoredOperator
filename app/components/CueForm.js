const React = require('react');

const CueForm = React.createClass({

	getInitialState: function(){
		return({
			cueNumber: '',
			dmxSnapshot: ''
		});
	},

	handleCueNumberChange: function(event){
		this.setState({
			cueNumber: event.target.value.trim()
		})
	},

	handleDMXSnapshotChange: function(event){
		this.setState({
			dmxSnapshot: event.target.value.trim().split(',')
		})
	},

	cueFormSubmit: function(){
		event.preventDefault();
		let formBody = {
			cueNumber : this.state.cueNumber,
			dmxSnapshot: this.state.dmxSnapshot
		};
		this.props.cueFormSubmit(formBody);
		this.setState({
			cueNumber: '',
			dmxSnapshot: ''
		})
	}

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