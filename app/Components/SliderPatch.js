const React = require('react');
const ChannelSlider = require('./ChannelSlider');

const SliderPatch = React.createClass({



    render: function(){
        let patchChannels = this.props.patchInfo.channels
        let patch_sliders = [];
        for(let jj = 0; jj < patchChannels.length; jj++){
            patch_sliders.push(
                <ChannelSlider key={jj} channelNum={this.props.patchInfo.startingChannel + jj} name={patchChannels[jj]["channelParamName"]} value={patchChannels[jj]["DefaultDMX"]} />
            );
        }

        return(
            <div>
                {patch_sliders}
            </div>
        )

    }

})

module.exports = SliderPatch;