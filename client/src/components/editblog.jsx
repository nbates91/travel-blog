import React, { Component } from 'react';
import { render } from 'react-dom';
import { update } from '../services/blogs';
import * as userService from '../services/user';

export default class Editblog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			content: '',
			imagepath: '',
			authToken: '',
		};
	}
	componentWillMount() {
		let token = localStorage.getItem('authtoken');
		this.setState({ authToken: token });
	}
	componentDidMount() {
		fetch(`/api/blogs/${this.props.match.params.blogid}`)
			.then(res => {
				return res.json();
			})
			.then(blog => {
				this.setState({ title: blog.title, content: blog.content, imagepath: blog.imagepath });
			});
	}
	handleTitle(value) {
		this.setState({ title: value });
	}
	handleContent(value) {
		this.setState({ content: value });
	}
	handleDel() {
		var result = confirm('Want to delete?');
		if (result) {
			fetch(`/api/blogs/${this.props.match.params.blogid}`, {
				method: 'DELETE',
				headers: new Headers({
					Authorization: this.state.authToken,
				}),
			})
				// .then(location.reload())
				.then(this.props.history.replace('/'))
				.then(response => console.log('Success:', response))
				.catch(error => console.error('Error:', error));
		}
	}

	handlePut() {
		fetch(`/api/blogs/${this.props.match.params.blogid}`, {
			method: 'PUT',
			body: JSON.stringify({
				title: this.state.title,
				content: this.state.content,
			}),
			headers: new Headers({
				'Content-Type': 'application/json',
				Authorization: this.state.authToken,
			}),
		})
			.then(this.props.history.replace(`/${this.props.match.params.blogid}`))
			.then(response => console.log('Success:', response))
			.catch(error => console.error('Error:', error));
	}
	render() {
		return (
			<div className="d-flex justify-content-center">
				<div
					className="card"
					style={{ width: '35rem', border: 'solid', borderColor: 'burlywood', margin: '0.4rem' }}
				>
					<img
						className="card-img-top rounded img-fluid d-inline-block"
						src={`${this.state.imagepath}`}
						alt="Card image cap"
					/>
					<div className="card-body">
						<textarea
							onChange={e => {
								this.handleTitle(e.target.value);
							}}
							className="card-title form-control"
							value={`${this.state.title}`}
							style={{ border: 'solid' }}
						/>
						<textarea
							onChange={e => {
								this.handleContent(e.target.value);
							}}
							className="card-text form-control mb-3"
							value={`${this.state.content}`}
							style={{ border: 'solid' }}
						/>
						<div className="row d-flex justify-content-center">
							<button
								className="btn btn-dark mr-2"
								onClick={() => {
									this.handlePut();
								}}
							>
								Save Changes
							</button>
							<button
								className="btn btn-dark ml-2"
								onClick={() => {
									this.handleDel();
								}}
							>
								Delete Post
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
