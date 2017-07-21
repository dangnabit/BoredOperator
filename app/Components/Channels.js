const React = require('react');
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const wrapStyle = {width: 400, margin: 60};
const style = { float: 'left', width: 60, height: 250 };
const parentStyle = { overflow: 'hidden' };
const io = require('socket.io-client');
const socket = io();


const Channels = React.createClass({

    getInitialState: function(){
		return({
			value: this.props.liveDMX[this.props.channelNumber - 1]

		});
	},
	
	onChange: function(sliderVal){
		// console.log(sliderVal);
		this.setState({
			value: sliderVal
		});
		this.props.setChannelValue(this.props.channelNumber , sliderVal);
	},

	onAfterChange: function(newValue){
		// socket.emit('update value', newValue);
	},

	handleTextChange: function(event){
		// this.props.setChannelValue(this.props.channelNumber, parseInt(event.target.value));
		// this.setState({
		// 	value: event.target.value
		// });
	},

	submitText: function(event){
		console.log(event.target.value)
		this.props.setChannelValue(this.props.channelNumber, parseInt(event.target.value));
		this.setState({
			value: event.target.value
		});
	},
		
	render: function(){
		return(
          <span className="slider-parent-span" style={parentStyle} >
		  	<div className="channel-slider-div" style={style}>
                 <span><p className="channelName">{this.props.name}</p></span> 
		  		<Slider vertical={true} min={0} max={255} value={this.props.liveDMX[this.props.channelNumber - 1]} onAfterChange={this.onAfterChange} onChange={this.onChange} />
		  		<br/>
				<input type='number' value={this.state.value} onChange={this.handleTextChange} onBlur={this.submitText}/> 
		  	</div>	
		  </span>
		)
	}
});

module.exports = Channels;

// Channel {this.props.channelNumber} <br/> 