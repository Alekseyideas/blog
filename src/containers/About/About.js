import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

	render(){
		return (
				<div className="container">
					<h1>About</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolore in ipsum provident vero? Excepturi fuga libero nisi quisquam sequi! Consectetur facere facilis ipsam non officiis perferendis quod tempora vero!
					</p>
				</div>
		)
	};
}

export default connect()(About);