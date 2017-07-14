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
			<div>
				<button onClick={this.props.handleClick}>Add Cue</button>
				{this.props.clicked ? <CueForm cueFormSubmit={this.props.formSubmit} /> : null}
			</div>
		)
	}
})

module.exports = AddCue;