const React = require('react');

const CueForm = React.createClass({

	getInitialState: function(){
		return({
			cueNumber: ''
		});
	},

	handleCueNumberChange: function(event){
		this.setState({
			cueNumber: event.target.value.trim()
		})
	},

	

	cueFormSubmit: function(event){
		event.preventDefault();
		console.log(`Submitting form for cue`);
		if(this.state.cueNumber !== ''){
			this.props.cueFormSubmit(this.state.cueNumber);
			this.setState({
				cueNumber: ''
			})
		}
	},

	render: function(){
		return(
			<div>
				<form>
					<label htmlFor="cueNumber">Cue Number</label>
					<input type="number" name="cueNumber" value={this.state.cueNumber} onChange={this.handleCueNumberChange}/>
					<br />
					<button onClick={this.cueFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
})

module.exports = CueForm;