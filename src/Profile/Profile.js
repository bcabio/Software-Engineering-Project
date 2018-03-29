import React, { Component } from 'react';

const baseURL = (process.env.REACT_APP_ENV === "production" ? 'https://swe-server.herokuapp.com' : 'http://localhost:5000')

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
		fetch(baseURL + '/profile',{
			method: 'get',
			credentials: 'include'
			})
			.then(response=> response.json())
			.then(data => {
				console.log('here',data);
				if(data['username'] != null) {
					this.setState({"profiles": data});
				}
			});
	}

	render() {
	

		if (this.state.profiles.length === 0) {

			return (<div className="container"> 
					{this.state.profiles.length}
						<p> You are not logged in </p>
					</div>);
		}
		return (<div className="container">
					<p> Welcome! {this.state.profiles.username} </p>
				</div>)	;
		}
	}


export default Profile;