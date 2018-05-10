import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Createblog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
			authorid: '',
			authToken: '',
		};
	}
	componentWillMount() {
		let token = localStorage.getItem('authtoken');
		this.setState({ authToken: token });
	}
	componentDidMount() {
		let id = localStorage.getItem('user');
		this.setState({ authorid: id });
	}
	handleTitle(value) {
		this.setState({ title: value });
	}
	handleContent(value) {
		this.setState({ content: value });
	}

	handlePost() {
		let blogObj = {
			title: this.state.title,
			content: this.state.content,
			authorid: this.state.authorid,
		};
		fetch('/api/blogs/', {
			method: 'POST',
			body: JSON.stringify(blogObj),
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.state.authToken,
			}),
		})
			.then(location.reload())
			.then(response => console.log('Success:', response))
			.catch(error => console.error('Error:', error));
	}
	render() {
		return (
			<div className="container">
				<h1 className="text-center">Create new post:</h1>
				<div className="row d-flex justify-content-center">
					<input
						className="mb-2"
						onChange={e => {
							this.handleTitle(e.target.value);
						}}
						placeholder="Insert Title"
					/>
				</div>
				<div className="row d-flex justify-content-center">
					<textarea
						onChange={e => {
							this.handleContent(e.target.value);
						}}
						placeholder="Insert Blog Post Content"
						rows="20"
						cols="80"
					/>
				</div>
				<div className="row d-flex justify-content-center">
					<button
						onClick={() => {
							this.handlePost();
						}}
						className="postBtn btn btn-dark mt-2"
					>
						Post blog
					</button>
				</div>
			</div>
		);
	}
}
