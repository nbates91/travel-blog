import React, { Component } from 'react';
import { render } from 'react-dom';
import Allblogs from './allblogs';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				<div className="jumbotron jumbotron-fluid text-center" style={{ backgroundColor: 'ivory' }}>
					<div className="container">
						<h1 className="display-4">Welcome to my travel blog!</h1>
					</div>
				</div>
				<Allblogs />
			</React.Fragment>
		);
	}
}
