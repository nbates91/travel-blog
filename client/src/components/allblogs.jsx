import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Allblogs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blogs: [],
		};
	}
	componentDidMount() {
		fetch('/api/blogs')
			.then(res => {
				return res.json();
			})
			.then(blogs => {
				this.setState({ blogs });
			});
	}
	render() {
		let blogs = this.state.blogs.map((blog, index) => {
			return <React.Fragment key={index} />;
		});
		return (
			<React.Fragment>
				<h1>This is where all blogs will display.</h1>
			</React.Fragment>
		);
	}
}
