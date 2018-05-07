import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Createblog from './createblog';
import Singleblog from './singleblog';
import Home from './home';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/create" component={Createblog} />
						<Route exact path="/:blogid" component={Singleblog} />
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

export default Navigation;
