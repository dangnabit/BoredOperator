const React = require('react');

const SliderPatch = React.createClass({

    render: function(){
        let patchChannels = this.props.patchInfo.channels
        let patch_sliders = [];
        for(let jj = 0; jj < patchChannel.length; jj++){
            patch_sliders.push(
                <ChannelSlider key={jj} startingNum={this.props.patchInfo.startingNum + jj} name={patchChannels[jj]["chanParamName"]} value={patchChannels[jj]["DefaultDMX"]} />
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