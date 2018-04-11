import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';
import ReactLoading from 'react-loading';

import Geolocation from '../Geolocation/Geolocation';

const baseURL = (process.env.REACT_APP_ENV === "production" ? 'https://swe-server.herokuapp.com' : 'http://localhost:5000');

class Profile extends Component {
	constructor(props) {
		super(props);


		this.state = {
			profiles : [
				
			],
			coords: ``
		};

		this.getInnerRef = this.getInnerRef.bind(this);
		this.getLocation = this.getLocation.bind(this);

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

	innerRef;
	getInnerRef(ref) {
		console.log('this.innerRef');
		this.innerRef = ref;
	}

	getLocation() {
		this.innerRef && this.innerRef.getLocation();
		// console.log(this.innerRef);
		// console.log('location', this.props);
		this.setState({"coords": this.props.coords});
		this.props.onGetLocation(this.props.coords);
		console.log('onGetLocation', this.props.onGetLocation);
		// console.log("state", this.state);
	}

	render() {

		console.log('propssss', this.props);
		const { getInnerRef, getLocation } = this;

		if (this.state.profiles.length === 0) {

			return (<div className="container"> 
						<p> You are not logged in </p>
					</div>);
		}
		return (<div className="container">
					<p> Welcome! {this.state.profiles.username} </p>
					
					{ this.state.coords && this.state.coords.latitude || <Geolocation ref={getInnerRef} />}
					 
      				<button onClick={getLocation}> Get Location </button>
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