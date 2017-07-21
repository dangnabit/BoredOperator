const React = require('react');


const FixtureFormRow = React.createClass({
    updateParamValue: function(event){
        event.preventDefault();
        let target = event.target;
        let position = this.props.channelArrayPosition;
        let value = parseInt(target.value);
        this.props.handleParamUpdate(value, position);

    },
 
    render: function(){
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
                    <input 
                        type='number' 
                        min={0} 
                        max={255} 
                        name="paramInput"
                        className="fixture-param-input" 
                        onBlur={this.updateParamValue}
                    />
                </div>
            </div>
        )
    }

})

module.exports = FixtureFormRow;