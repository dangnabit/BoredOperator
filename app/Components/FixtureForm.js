const React = require('react');
const FixtureFormRow = require('./FixtureFormRow.js');

const FixtureForm = React.createClass({

	getInitialState: function(){
		return({
			fixtureName: '',
			channelParameters: [],
			channelNum: 1
		});
	},


	handleFixtureNameChange: function(event){
		this.setState({
			fixtureName: event.target.value
		})
	},

	handleChannelParametersChange: function(event){
		this.setState({
			channelParameters: event.target.value.trim().split(',')
		})
	},

	handleParamUpdate: function(value, index){
		let tempParams = this.state.channelParameters;
		tempParams[index] = value;
		this.setState({
			channelParameters: tempParams
		});
		console.log(this.state.channelParameters);
	},


	fixtureFormSubmit: function(event){
		event.preventDefault();
		console.log(this.state.fixtureName.trim());
		console.log(this.state.channelParameters);
		
		if(this.state.fixtureName !== '' && this.state.channelParameters !== ''){
			let formBody = {
				fixtureName: this.state.fixtureName.trim(),
				channelParameters: this.state.channelParameters
			};
			this.props.fixtureFormSubmit(formBody);
			this.setState({
				fixtureName: '',
				channelParameters: [],
				channelNum: 1
			});
			this.props.getFixtures();
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
		for(let i = 0; i < this.state.channelNum; i++){
			rowArray.push(
				
				<FixtureFormRow 
					key={i} 
					channelArrayPosition={parseInt(i)} 
					showAddRemove={ ( i + 1 === this.state.channelNum)}
					handleAddRowClick={this.handleAddRowClick}
					handleRemoveRowClick={this.handleRemoveRowClick}
					handleParamUpdate={this.handleParamUpdate}
					disableRemoveBtn={(i === 0)}
					channelParameters={this.props.channelParameters}
				/>
			);
		}
		return(
			<div>
				<form>
					<label htmlFor="fixtureName">Fixture Name: </label>
					<input className="fixture-input" type="text" name="cueNumber" value={this.state.fixtureName} onChange={this.handleFixtureNameChange}/>
					<br />
					<label htmlFor="channelParameters">Channel Parameters: </label>
					<div className="channelParameters">
 						{rowArray}
					</div>
					<button className='btn btn-md btn-warning'onClick={this.fixtureFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
})

module.exports = FixtureForm;