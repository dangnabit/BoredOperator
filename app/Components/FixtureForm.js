
const React = require('react');
const FixtureFormRow = require('./FixtureFormRow');

const FixtureForm = React.createClass({

	getInitialState: function(){
		return({
			fixtureName: '',
			channelParams: [],
			channelNum: 3,

		});
	},


	handleFixtureNameChange: function(value, index){
		this.setState({
			fixtureName: event.target.value.trim()
		})
	},

	handleChannelParametersChange: function(event){
		this.setState({
			channelParameters: event.target.value.trim().split(',')
		})
	},

	handleParamUpdate: function(value, index){
		let tempParams = this.state.channelParams;
		tempParams[index] = value;
		this.setState({
			channelParams: tempParams
		});
		console.log(this.state.channelParams);
	},

	fixtureFormSubmit: function(event){
		event.preventDefault();
		if(this.state.fixtureName !== '' && this.state.channelParameters !== ''){
			let formBody = {
				fixtureName: this.state.fixtureName,
				channelParameters: this.state.channelParameters
			};
			this.props.fixtureFormSubmit(formBody);
			this.setState({
				fixtureName: '',
				channelParameters: ''
			});
		}
	},

	handleAddRowClick: function(event){
		event.preventDefault();
		this.setState({
			channelNum: this.state.channelNum + 1
		});
	},

	handleRemoveRowClick: function(event){
		event.preventDefault();
		
		this.setState({
			channelNum: this.state.channelNum - 1
		})
	
	},

	render: function(){
		let rowArray = [];
		for(let ii = 0; ii < this.state.channelNum; ii++){
			rowArray.push(
				
				<FixtureFormRow 
					key={ii} 
					channelArrayPosition={parseInt(ii)} 
					showAddRemove={ ( ii + 1 === this.state.channelNum)}
					handleAddRowClick={this.handleAddRowClick}
					handleRemoveRowClick={this.handleRemoveRowClick}
					handleParamUpdate={this.handleParamUpdate}
					disableRemoveBtn={(ii === 0)}
				/>
			);
		}
		return(
			<div>
				<form>
					<label htmlFor="fixtureName">Fixture Name: </label>
					<input type="text" name="cueNumber" value={this.state.fixtureName} onChange={this.handleFixtureNameChange}/>
					<br />
					<label htmlFor="channelParameters">Channel Parameters: </label>
					<div name="channelParameters">
						{rowArray}
					</div>
					<button className='btn btn-md btn-success'onClick={this.fixtureFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
})

module.exports = FixtureForm;