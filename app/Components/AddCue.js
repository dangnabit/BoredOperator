const React = require('react');
const CueForm = require('./CueForm.js');

const AddCue = React.createClass({
	/*
	/Button that when pressed displays the form to create a new patch
	/props:
	/ - clicked (bool) : Determines when to display the PatchForm component
	/ - handleClick (event): toggles state of clicked in Parent component 
	*/

	render: function(){
		return(
			<div className="toolbarBtn">
				<button className="btn btn-warning btn-lg toolbarBtn" onClick={this.props.handleClick}>Create Cue</button>
				{this.props.clicked ? <CueForm cueFormSubmit={this.props.formSubmit} cues={this.props.cues} /> : null}
			</div>
		)
	}
})

module.exports = AddCue;
