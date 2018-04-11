import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

const baseURL = (process.env.REACT_APP_ENV === "production" ? 'https://swe-server.herokuapp.com' : 'http://localhost:5000')

class Profile extends Component {
	constructor(props) {
		super(props);


		this.state = {
			profiles : [
				
			],
			coords: ``
		};

		this.handleLogout = this.handleLogout.bind(this);
	
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

	handleLogout() {
		this.setState({"profiles": ""});
		fetch(baseURL + '/logout', {
			method: 'get',
			credentials: 'include'
		});
	}

	
	render() {
		console.log('props', this.props);

		const c = this.props.positionError && this.props.positionError.code === 2 ? <div> Unable to acquire your location </div> : <div> </div>;
		if (this.state.profiles.length === 0) {

			return (<div className="container"> 
					{this.state.profiles.length}
						<p> You are not logged in </p>
					</div>);
		}
		return (<div className="container">
					<p> Welcome! {this.state.profiles.username} </p>
					{this.props.isGeolocationEnabled.toString()}
					{this.props.coords && this.props.coords.latitude}
					{this.props.positionError && c}
      				<button onClick={this.handleLogout}>
      					Logout
      				</button>

				</div>)	;
		}
	}


export default geolocated({
	positionOptions: {
		enabledHighAccuracy: false
	}
})(Profile);