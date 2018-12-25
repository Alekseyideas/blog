import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFound extends Component {

	render(){
		return (
				<div className="container"> <h1> Page not found</h1> </div>
		)
	};
}


export default connect()(NotFound);