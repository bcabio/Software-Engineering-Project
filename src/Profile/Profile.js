import React, { Component } from 'react';

const URL = "https://swe-server.herokuapp.com"

class Profile extends Component {
	constructor(props) {
		super(props);


		this.state = {
			profile: {
				"email": null,
				"username": null,
			}
		};
	}

	componentDidMount() {
		console.log('we here');
		fetch(URL + '/profile')
			.then(response=> response.json())
			.then(data => this.setState({profile: data}));
	}

	render() {
		if (this.state.profile.email) {
			return (<div>
				Welcome {this.state.profile.username} </div>);
		}

		return (<div>
			{this.state.profile.username}
				<p>You are currently not logged in </p>
				</div>);
	}
}

export default Profile;