const React = require('react');
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const wrapStyle = {width: 400, margin: 60};
const style = { float: 'left', width: 180, height: 200, marginBottom: 160, marginLeft: 50 };
const parentStyle = { overflow: 'hidden' };
const io = require('socket.io-client');
const socket = io();


const ChannelSlider = React.createClass({

    getInitialState: function(){
		return({
			textValue: this.props.value
		})
	},
	
	componentDidMount(){
		socket.on('update value', this._updateValue);

	},

	onChange: function(sliderVal){
		console.log('on change');
		this.setState({
			textValue: sliderVal
		});
		this.props.setFixtureValue(sliderVal, this.props.patchChannel);
	},

	onAfterChange: function(newValue){
		socket.emit('update value', newValue);
	},

	handleTextChange: function(event){
		this.setState({
			textValue: event.target.value
		});
	},

	submitText: function(event){
		this.props.setFixtureValue(parseInt(event.target.value), this.props.patchChannel);
	},
		
	render: function(){
		return(
		<span className="slider-parent-span" style={parentStyle} >
			<div className="channel-slider-div">
                <span><p className="channelName">{this.props.name}</p></span>
				<Slider vertical={true} min={0} max={255} value={this.props.value} onAfterChange={this.onAfterChange} onChange={this.onChange} />
				<input type='number' value={this.state.textValue} onChange={this.handleTextChange} onBlur={this.submitText}/>
			</div>	
		</span>
		)
	}

});

module.exports = ChannelSlider;