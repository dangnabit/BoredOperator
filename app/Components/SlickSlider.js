const React = require('react');


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
        for(let i = 0; i < this.props.patches.length; i++){
            activePatches.push(
                <ActivePatch key={i} patchInfo={this.props.patches[i]}/>
            );
        }
        return(
            <div className="slick-slider">
                {activePatches}
            </div>
        )
    }

});

module.exports = SlickSlider;
