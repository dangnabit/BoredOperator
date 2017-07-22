const React = require('react');


const FixtureFormRow = React.createClass({
    updateParamValue: function(event){
        event.preventDefault();
       if(event.target.value !== ''){
            let target = event.target;
            let position = this.props.channelArrayPosition;
            let value = target.value;
            this.props.handleParamUpdate(value, position);
       }

    },
 
    render: function(){
        let optionNames = [];
        let channelParameters = this.props.channelParameters;
        optionNames.push(<option key={0} value=""></option>);
        for(let ii = 0; ii < channelParameters.length; ii++){
            optionNames.push(<option key={ii+1} value={channelParameters[ii]}>{channelParameters[ii].name}</option>);
        }
        return(
            <div className=' row fixture-form-row'>
                <div className="col-sm-4 col-xs-6">
                    { this.props.showAddRemove ?  
                        <span>
                            <button 
                                className="btn btn-lg fixture-form-btn fixture-form-add-row"
                                onClick={this.props.handleAddRowClick}
                            >&#x2B;</button>
                            <button 
                                className="btn btn-lg fixture-form-btn fixture-form-rm-row"
                                onClick={this.props.handleRemoveRowClick}
                                disabled={this.props.disableRemoveBtn}
                            >&minus;</button>
                        </span>
                        :
                        null
                    }  
                </div>
                <div className="col-sm-4 col-xs-6">
                    <label htmlFor="paramInput">{(this.props.channelArrayPosition + 1)} : </label>
                    <select 
                        type="text" 
                        name="paramInput"
                        className="fixture-param-input" 
                        onBlur={this.updateParamValue}
                    >
                        {optionNames}
                    </select>
                </div>
            </div>
        )
    }

})

module.exports = FixtureFormRow;