const React = require('react');
const Channels = require('./Channels');
var helpers = require('../utils/helpers');


const ChannelContainer = React.createClass({

    componentDidMount: function(){
        this.props.slick;
    },

    deletePatch: function(item, event){
        helpers.reloadSlickSlider();
        helpers.deletePatch(item, this.props.getPatch);
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
                <p>{this.props.fixturePatch.fixtureName} ({this.props.fixturePatch.startingChannel}) 
                  <span className="glyphicon glyphicon-remove-sign" onClick={this.deletePatch.bind(this, this.props.fixturePatch.startingChannel)} ></span>
                </p>
                {channelFaders}
            </div>
        )
    }
});

module.exports = ChannelContainer;