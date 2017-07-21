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
            <div className='fixture-form-row'>
            { this.props.showAddRemove ?  
                <span>
                    <button 
                        className="btn btn-sm fixture-form-btn fixture-form-add-row"
                        onClick={this.props.handleAddRowClick}
                    >&#x2B;</button>
                    <button 
                        className="btn btn-sm fixture-form-btn fixture-form-rm-row"
                        onClick={this.props.handleRemoveRowClick}
                        disabled={this.props.disableRemoveBtn}
                    >&minus;</button>
                </span>
                :
                null
            }  
                <span><p>{this.props.channelArrayPosition + 1} :</p></span>
                <input 
                    type='number' 
                    min={0} 
                    max={255} 
                    className="fixture-param-input" 
                    onBlur={this.updateParamValue}
                />
            </div>
        )
    }

})

module.exports = FixtureFormRow;