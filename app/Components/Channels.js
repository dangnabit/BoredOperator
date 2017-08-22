const React = require('react');
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const wrapStyle = {width: 400, margin: 60};
const style = { float: 'left', width: 60, height: "69%" };
const parentStyle = { overflow: 'hidden' };
const io = require('socket.io-client');
const socket = io();


const Channels = React.createClass({

    getInitialState: function(){
		return({
			value: ''
		});
	},

	componentDidMount: function(){
		this.setState({
			value: ''
		});
	},

	onChange: function(sliderVal){
		// console.log(sliderVal);
		// this.setState({
		// 	value: sliderVal
		// });
		this.props.setChannelValue(this.props.channelNumber , sliderVal);
	},

	onAfterChange: function(newValue){
		// socket.emit('update value', newValue);
	},

	handleTextChange: function(event){
		// this.props.setChannelValue(this.props.channelNumber, parseInt(event.target.value));
		this.setState({
			value: event.target.value
		});
	},

	submitText: function(event){
		if (this.state.value !== ''){
			var value = parseInt(event.target.value);
			
			if (value > 255){
				value = 255;
			} else if(value < 0){
				value = 0;
			}
			this.props.setChannelValue(this.props.channelNumber, value);
			this.setState({
				value: ''
			});
		}
	},
	handleKeyPress: function(event) {
		if (event.key === 'Enter') {
      		this.submitText(event);
    	}
  	},
		
	render: function(){
		return(
          <span className="slider-parent-span" style={parentStyle} >
		  	<div className="channel-slider-div" style={style}>
		  		<input 
				  className='channel-input' 
				  min="0" 
				  max="255" 
				  type='number' 
				  value={this.state.value} 
				  onChange={this.handleTextChange} 
				  onBlur={this.submitText} 
				  placeholder={this.props.liveDMX[this.props.channelNumber - 1]}
				  onKeyPressCapture={this.handleKeyPress}
				/> 
				<span><p className="channelName">{this.props.name}</p></span> 
				<Slider 
				  vertical={true} 
				  min={0} 
				  max={255} 
				  value={this.props.liveDMX[this.props.channelNumber - 1]} 
				  onAfterChange={this.onAfterChange} 
				  onChange={this.onChange} 
		          trackStyle={{ backgroundColor: '#FF9900'}}
				  handleStyle={{
          			borderColor: '#FF9900',
					borderRadius: "2px",
          			height: 20,
          			width: 28,
					marginLeft: -12,
          			backgroundColor: '#999999',
        		  }}  
				/>				
		  	</div>	
		  </span>
		)
	}
});

module.exports = Channels;

// Channel {this.props.channelNumber} <br/> 