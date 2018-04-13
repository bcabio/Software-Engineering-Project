import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

import Geolocation from '../Geolocation/Geolocation';

const baseURL = (process.env.REACT_APP_ENV === "production" ? 'https://swe-server.herokuapp.com' : 'http://localhost:5000');

class Profile extends Component {
	constructor(props) {
		super(props);


		this.state = {
			profile : [
				
			],
			coords: ``,
			locationAvailable: false,
			locationSource: ``
		};

		this.getInnerRef = this.getInnerRef.bind(this);
		this.getLocation = this.getLocation.bind(this);
		this.setLocation = this.setLocation.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	
	}

	componentDidMount() {
		fetch(baseURL + '/profile',{
			method: 'get',
			credentials: 'include'
			})
			.then(response=> response.json())
			.then(data => {
				console.log('here',data);
				if(data['username'] != null) {
					this.setState({"profile": data});
					console.log('data', data);
				}
				if(data['longitude'] != null && data['latitude'] != null){
					this.setState({"locationAvailable": true});
					this.setState({"locationSource": "Location saved to profile:"});
				}


			});
	}

	handleLogout() {
		this.setState({"profiles": ""});
		fetch(baseURL + '/logout', {
			method: 'get',
			credentials: 'include'
		});
		window.location.reload();
	}

	innerRef;
	getInnerRef(ref) {
		this.innerRef = ref;
	}

	getLocation() {
		this.innerRef && this.innerRef.getLocation();
		this.setState({"coords": this.props.coords});
		this.props.setGlobalLocation(this.props.coords);
		this.setLocation();
		window.location.reload();
	}

	setLocation() {
		// update current session to have location
		fetch(baseURL + '/updateSession', {
			method: 'post',
      		mode: 'cors',
			credentials: 'include',
			body: 'latitude=' + this.props.coords.latitude
				+ '&longitude=' + this.props.coords.longitude,
			headers: new Headers({
		        'Accept': 'application/json',
		        "Content-Type": "application/x-www-form-urlencoded"
	      	}),
	      	referrer: 'no-referrer'
		})

		// update user profile to have their long and lat
		fetch(baseURL + '/updateProfile', {
			method: 'post', 
			mode: 'cors', 
			credentials: 'include',
			body: 'latitude=' + this.props.coords.latitude
				+ '&longitude=' + this.props.coords.longitude,
			headers: new Headers({
		        'Accept': 'application/json',
		        "Content-Type": "application/x-www-form-urlencoded"
	      	}),
	      	referrer: 'no-referrer'
		})
	}
	render() {
		const { getInnerRef, getLocation } = this;

		if (!this.props.loggedIn) {

			return (<div className="container"> 
						<p> You are not logged in </p>
						<button href="/" onClick={this.handleLogout}>
      					Logout
      				</button>
					</div>);
		}
		return (<div className="container">
					<p> Welcome! {this.state.profile.username} </p>


					<div>
						{this.state.locationSource}
						<p> Latitude: {this.state.profile.latitude} </p>
						<p> Longitude: {this.state.profile.longitude} </p>
					</div>

					{ !this.state.locationAvailable && <Geolocation ref={getInnerRef} rememberLocation={getLocation}/> }

      				<button href="/" onClick={this.handleLogout}>
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