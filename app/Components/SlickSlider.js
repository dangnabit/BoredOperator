const React = require('react');
const SliderPatch = require('./SliderPatch');


const SlickSlider = React.createClass({
    /*
    // Props: 
    //        - patches: all the patches that exist in mongo db
    //          structure: [{
                                startingNum : (NUM),
                                channels: [{
                                    channelParamNam: STRING,
                                    DefaultDMX#: (0-255)
                                }]
                            }]
    //
    //
    */

    render: function(){
        let activePatches = [];
        console.log(this.props.patches)
        for(let i = 0; i < this.props.patches.length; i++){
            activePatches.push(
                <SliderPatch key={i} patchInfo={this.props.patches[i]}/>
            );
        }
        return(
            <div className="col-md-8 col-md-offset-2 slick-slider" id="patch-slider">
                {activePatches}
            </div>
        )
    }

});

module.exports = SlickSlider;
