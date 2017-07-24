const React = require('react');

const CueForm = React.createClass({

	getInitialState: function(){
		return({
			cueNumber: '',
			isValid: false,
			cueExists: false
		});
	},

	handleCueNumberChange: function(event){
		console.log(this.props.cues);
		for (var i = 0; i < this.props.cues.length; i++) {
			if (parseInt(this.props.cues[i].cueNumber) === parseInt(event.target.value.trim())){
				this.setState({
					cueNumber: parseInt(event.target.value.trim()),
					isValid: false,
					cueExists: true
				});
				return;
			} else if (event.target.value !== '') {
				this.setState({
					cueNumber: parseInt(event.target.value.trim()),
					isValid: true,
					cueExists: false
				});
			} else {
				this.setState({
					cueNumber: '',
					isValid: false,
					cueExists: false
				});
			}
			
		}
	},

	

	cueFormSubmit: function(event){
		event.preventDefault();
		console.log(`Submitting form for cue`);
		if(this.state.cueNumber !== '' && this.state.isValid){
			this.props.cueFormSubmit(this.state.cueNumber);
			this.setState({
				cueNumber: '',
				isValid: false
			})
		}
	},

	render: function(){
		return(
			<div>
				<form>
					<label htmlFor="cueNumber">Cue Number: 
						<span 
							className="glyphicon glyphicon-info-sign" 
							data-toggle="tooltip" 
							data-placement="top" 
							title="Enter your new cue number. Cue numbers must be unique, but can be decimal numbers">
						</span>
					</label>
					<input className="fixture-input" type="number" name="cueNumber" value={this.state.cueNumber} onChange={this.handleCueNumberChange}/>
					<br />
					<button className="btn btn-md btn-warning" disabled={!this.state.isValid} onClick={this.cueFormSubmit}>Submit</button>
					{this.state.cueExists ? 
					<div className="alert alert-danger" role="alert">
						<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
  						 <span className="sr-only">Error:</span> 
						That cue has already been recorded.
					</div> 
					: null}
				</form>
			</div>
		)
	}
})

module.exports = CueForm;