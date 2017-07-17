const React = require('react');
const PatchForm = require('./PatchForm.js');

const AddPatch = React.createClass({
	/*
	/Button that when pressed displays the form to create a new patch
	/props:
	/ - clicked (bool) : Determines when to display the PatchForm component
	/ - handleClick (event): toggles state of clicked in Parent component 
	*/

	render: function(){
		return(
			<div>
				<button className="btn btn-warning btn-lg" onClick={this.props.handleClick}>Patch Fixture</button>
				{this.props.clicked ? <PatchForm patcFormSubmit={this.props.patchFormSubmit} /> : null}
			</div>
		)
	}
})

module.exports = AddPatch;