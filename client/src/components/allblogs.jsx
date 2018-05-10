import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
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
			return (
				<React.Fragment key={index}>
					<div
						className="card col-md-3"
						style={{
							width: '18rem',
							border: 'solid',
							borderColor: 'burlywood',
							margin: '0.4rem',
							backgroundColor: 'ivory',
						}}
					>
						<img
							className="card-img-top rounded img-fluid h-50 d-inline-block"
							src={`${blog.imagepath}`}
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title">{blog.title}</h5>
							<p className="card-text">{blog.content.substring(0, 100)}...</p>
							<Link className="btn btn-dark" to={`/${blog.id}`}>
								Read more...
							</Link>
						</div>
					</div>
				</React.Fragment>
			);
		});
		return (
			<div>
				<h1 className="text-center">Blog post archive:</h1>
				<div className="row d-flex justify-content-center">{blogs}</div>
			</div>
		);
	}
}
