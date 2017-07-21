const React = require('react');
const ChannelContainer = require('./ChannelContainer');
var helpers = require('../utils/helpers');


const SelectedFixture = React.createClass({
    /*
    // Props: 
    //        - patches: all the patches that exist in mongo db
    //          structure: [{
                                fixtureName : STRING,
                                startingChannel : (NUM),
                                channelParameters: [{
                                    name: STRING,
                                    default: (0-255),
                                    catagory: STRING
                                }]
                            }]
    //
    //
    */
    componentWillReceiveProps: function(){
        // helpers.startSlickSlider();
    },

    render: function(){
        
      let activePatches = [];
    //   console.log(this.props.patch);
      
      for(let i = 0; i < this.props.patch.length; i++){
        activePatches.push(
          <ChannelContainer 
            key={i} 
            fixturePatch={this.props.patch[i]}
            setChannelValue={this.props.setChannelValue}
            liveDMX={this.props.liveDMX}
            slick={this.slick}
          />
        );
      }

        return(
            <div className="slick-slider" id="patch-slider">
                {activePatches}
            </div>
        )
    }

});

module.exports = SelectedFixture;