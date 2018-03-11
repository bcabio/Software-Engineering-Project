import React, { Component } from 'react';

const URL = 'localhost:5000'

class Post extends Component {


	constructor(props) {
		super(props);


		this.state = {
			post: {
				"id": null,
				"title": null,
				"description": null,
				"pictureLink": null
			}
		};
	}

	componentDidMount() {
		console.log('we here');
		fetch(URL + '/post')
			.then(response=> response.json())
			.then(data => this.setState({post: data}));
	}

	render() {
		return (<div>
				{this.state.post.id}
		</div>)
	}
}
export default Post;