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
				<button onClick={this.props.handleClick}>Add Patch</button>
				{this.props.clicked ? <PatchForm patcFormSubmit={this.props.patchFormSubmit} /> : null}
			</div>
		)
	}
})

module.exports = AddPatch;