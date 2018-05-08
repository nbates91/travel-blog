import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Createblog from './createblog';
import Singleblog from './singleblog';
import Home from './home';
import AuthButton from './auth/authButton';
import Login from './auth/login';
import Logout from './auth/logout';
import PrivateRoute from './auth/privateRoute';

class Navigation extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<AuthButton />
					<Link className="btn btn-info" to="/">
						Home
					</Link>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/logout" component={Logout} />
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
