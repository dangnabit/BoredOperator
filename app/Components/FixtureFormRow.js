const React = require('react');


const FixtureFormRow = React.createClass({

 
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
                        className="btn btn-sm fixture-form-btn fixture-form-add-row"
                        onClick={this.props.handleRemoveRowClick}
                    >&minus;</button>
                </span>
                :
                null
            }  
                <span><p>{this.props.channelArrayPosition} :</p></span>
                <input type='number' min={0} max={255} />
            </div>
        )
    }

})

module.exports = FixtureFormRow;