import React, { Component } from 'react';

const URL = "https://swe-server.herokuapp.com"

class Profile extends Component {
	constructor(props) {
		super(props);


		this.state = {
			"profiles" : [
				
			]
		};
	}

	componentDidMount() {
		console.log('we here');
		fetch(URL + '/profiles')
			.then(response=> response.json())
			.then(data => {
				console.log(data);
				this.setState({"profiles": data});
				console.log(data);
			});
	}

	render() {
		const cards = this.state.profiles.map((user) =>
				<div key={user._id} className="card">
					<h3 className="card-title"> {user.username} </h3>
					<p> {user.email} </p>
					<p className="card-text"> {user.password} </p>
				</div>
			);

	return (<div class="container">
				<h1> List of All Users </h1>
				{cards}
			</div>)	;
		}
	}


export default Profile;