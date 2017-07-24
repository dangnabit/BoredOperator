const React = require('react');
const FixtureFormRow = require('./FixtureFormRow.js');

const FixtureForm = React.createClass({

	getInitialState: function(){
		return({
			fixtureName: '',
			channelParameters: [],
			channelNum: 1,
			isValid: false
		});
	},


	handleFixtureNameChange: function(event){
		this.setState({
			fixtureName: event.target.value
		});

		if(this.state.fixtureName !== '' && this.state.channelParameters.length !== 0){
			this.setState({
				isValid: true
			});
		} else {
			this.setState({
				isValid: false
			});
		}
	},

	handleChannelParametersChange: function(event){
		this.setState({
			channelParameters: event.target.value.trim().split(',')
		});
		
		if(this.state.fixtureName !== '' && this.state.channelParameters.length !== 0){
			this.setState({
				isValid: true
			});
		} else {
			this.setState({
				isValid: false
			});
		}
	},

	handleParamUpdate: function(value, index){
		let tempParams = this.state.channelParameters;
		tempParams[index] = value;
		this.setState({
			channelParameters: tempParams
		});
		if(this.state.fixtureName !== '' && this.state.channelParameters.length !== 0){
			this.setState({
				isValid: true
			});
		} else {
			this.setState({
				isValid: false
			});
		}
		// console.log(this.state.channelParameters);
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
					<label htmlFor="fixtureName">Fixture Name: 
						<span 
							className="glyphicon glyphicon-info-sign" 
							data-toggle="tooltip" 
							data-placement="top" 
							title="Give your fixture a name. Make and model are always a good choice ;)">
						</span>
					</label>
					<input className="fixture-input" type="text" name="cueNumber" value={this.state.fixtureName} onChange={this.handleFixtureNameChange}/>
					<br />
					<label htmlFor="channelParameters">Channel Parameters: 
						<span 
							className="glyphicon glyphicon-info-sign" 
							data-toggle="tooltip" 
							data-placement="top" 
							title="Add the channel parameters below. Consult your fixtures manual for the DMX channel mapping.">
						</span>
					</label>
					<div className="channelParameters">
 						{rowArray}
					</div>
					<button className='btn btn-md btn-warning' disabled={!this.state.isValid} onClick={this.fixtureFormSubmit}>Submit</button>
				</form>
			</div>
		)
	}
})

module.exports = FixtureForm;