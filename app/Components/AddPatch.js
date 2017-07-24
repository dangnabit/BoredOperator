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
			<div className="toolbarBtn">
				<button className="btn btn-warning btn-lg toolbarBtn" onClick={this.props.handleClick}>Patch Fixture</button>
				{this.props.clicked ? 
					<PatchForm 
						patchFormSubmit={this.props.patchFormSubmit} 
						fixtures={this.props.fixtures}
						getPatch={this.props.getPatch}
						patch={this.props.patch}
					/> 
				: null}
			</div>
		)
	}
});

module.exports = AddPatch;