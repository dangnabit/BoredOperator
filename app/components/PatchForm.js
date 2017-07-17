const React = require('react');

const PatchForm = React.createClass({

	/*
	/ Props
	/	- patchFormSubmit : function to get fixture and add it to patch in database( inherit from parent)
	/
	*/

	getInitialState: function(){
		return({
			fixtureName: '',
			channelNum: ''
		})
	},

	handleFixtureNameChange: function(event){
		this.setState({
			fixtureName: event.target.value.trim()
		})
	},

	handleChannelNumChange: function(event){
		this.setState({
			channelNum: event.target.value.trim()
		});
	},

	patchFormSubmit: function(event){
		event.preventDefault();
		if(this.state.fixtureName !== '' && this.state.channelNum !== ''){
			let formObj = {
				fixtureName: this.state.fixtureName,
				channelNum: this.state.channelNum
			};
			this.props.patchFormSubmit(formObj);
			this.setState({
				fixtureName: '',
				channelNum: ''
			})
		}
		
	},

	render: function(){
		return(
			<div>
				<form>
					<label htmlFor="fixtureName">Fixture Name</label>
					<input type="text" name="fixtureName" value={this.state.fixtureName} onChange={this.handleFixtureNameChange}/>
					<br />
					<label htmlFor="startingChannel">Channel #</label>
					<input type="number" name="channelNum" min={1} max={512} value={this.state.channelNum} onChange={this.handleChannelNumChange}/>
					<br />
					<button className='btn btn-md btn-success' onClick={this.patchFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}

})

module.exports = PatchForm;