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
				<div class="jumbotron jumbotron-fluid text-center">
					<div class="container">
						<h1 class="display-4">Welcome to my travel blog!</h1>
					</div>
				</div>
				<Allblogs />
			</React.Fragment>
		);
	}
}
