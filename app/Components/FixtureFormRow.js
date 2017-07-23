const React = require('react');


const FixtureFormRow = React.createClass({
    updateParamValue: function(event){
        event.preventDefault();
       if(event.target.value !== ''){
            let target = event.target;
            let position = this.props.channelArrayPosition;
            let value = this.props.channelParameters[parseInt(target.value)];
            this.props.handleParamUpdate(value, position);
       }

    },
 
    render: function(){
        let optionNames = [];
        let channelParameters = this.props.channelParameters;
        optionNames.push(<option key={0} value=""></option>);
        for(let i = 0; i < channelParameters.length; i++){
            optionNames.push(<option key={i+1} value={i}>{channelParameters[i].name}</option>);
        }
        return(
            <div className=' row fixture-form-row'>
                <div className="col-xs-12">
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
                
                { this.props.showAddRemove ?  
                    <div className="row">
                        <button 
                            className="btn btn-lg fixture-form-btn fixture-form-add-row addBtn"
                            onClick={this.props.handleAddRowClick}
                        >&#x2B;</button>
                        <button 
                            className="btn btn-lg fixture-form-btn fixture-form-rm-row addBtn"
                            onClick={this.props.handleRemoveRowClick}
                            disabled={this.props.disableRemoveBtn}
                        >&minus;</button>
                    </div>
                    :
                    null                  
                }
            </div>
        )
    }

})

module.exports = FixtureFormRow;