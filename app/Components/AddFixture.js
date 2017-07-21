const React = require('react');
const FixtureForm = require('./FixtureForm.js');

const AddFixture = React.createClass({
	/*
	/Button that when pressed displays the form to create a new patch
	/props:
	/ - clicked (bool) : Determines when to display the PatchForm component
	/ - handleClick (event): toggles state of clicked in Parent component 
	*/

	render: function(){
		return(
			<div className="toolbarBtn">
				<button className="btn btn-warning btn-lg toolbarBtn" onClick={this.props.handleClick}>Create Fixture</button>
				{this.props.clicked ? 
					<FixtureForm 
						fixtureFormSubmit={this.props.formSubmit} 
						channelParameters={this.props.channelParameters} 
					/> 
				: null}
			</div>
		)
	}
})

module.exports = AddFixture;