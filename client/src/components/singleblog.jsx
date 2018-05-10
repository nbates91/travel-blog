import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Singleblog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blog: {},
		};
	}
	componentDidMount() {
		fetch(`api/blogs/${this.props.match.params.blogid}`)
			.then(res => {
				return res.json();
			})
			.then(blog => {
				this.setState({ blog });
			});
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
						src={`${this.state.blog.imagepath}`}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{this.state.blog.title}</h5>
						<p className="card-text">{this.state.blog.content}</p>
					</div>
				</div>
			</div>
		);
	}
}
