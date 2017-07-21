const React = require('react');
const Channels = require('./Channels');

const ChannelContainer = React.createClass({

    componentDidMount: function(){
        this.props.slick;
    },

    render: function(){
        let fixtureChannels = this.props.fixturePatch.channelParameters
        let channelFaders = [];
        for(let i = 0; i < fixtureChannels.length; i++){
            channelFaders.push(
                <Channels 
                    key={i} 
                    channelNumber={this.props.fixturePatch.startingChannel + i} 
                    name={fixtureChannels[i]["name"]} 
                    value={fixtureChannels[i]["default"]} 
                    setChannelValue={this.props.setChannelValue}
                    liveDMX={this.props.liveDMX}    
                />
            );
        }

        return(
            <div>
                <p>{this.props.fixturePatch.fixtureName}</p>
                {channelFaders}
            </div>
        )

    }

})

module.exports = ChannelContainer;