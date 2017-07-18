const React = require('react');
const CueForm = require('./CueForm.js');

const Admin = React.createClass({
	
	render: function(){
		return(
			<div className="container-fluid">
				<div className="row" id="main-page-row">
					<div className="adminTools">
						<p>Admin Console</p>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Admin;
