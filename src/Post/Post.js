import React, { Component } from 'react';
import Img from 'react-image';

const URL = 'https://swe-server.herokuapp.com'

class Post extends Component {


	constructor(props) {
		super(props);


		this.state = {
			"post": {
				"id": null,
				"title": null,
				"description": null,
				"pictureLink": null
			}
		};
	}

	componentDidMount() {
		console.log('we here');
		fetch(URL + '/post/1',{
			headers: {
				'Accept': 'application/json'
			},
			referrer: 'no-referrer',
			mode: 'cors'
		})
			.then(response=> response.json())
			.then(data => {
				this.setState({"post": data});
				console.log(data);
			});
	}

	render() {

		return (<div className="container">
			<div className="card" style={{width: `18rem`}}>
				  <Img className="card-img-top" src={this.state.post.pictureLink} alt="Card image cap"/>
				  <div className="card-body">
				   <h5 className="card-title">{this.state.post.title}</h5>
				    <p className="card-text">{this.state.post.pictureLink}.jpg</p>
				  </div>
				</div>
		</div>)
	}
}
export default Post;