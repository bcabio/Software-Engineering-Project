import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import { geolocated } from 'react-geolocated';

class Geolocation extends Component {

	render() {
		return !this.props.isGeolocationAvailable
			? <div> Your browser does not support Geolocation </div>
			: this.props.positionError && this.props.positionError.code === 1 
				? <p> {this.props.positionError.message}. Please go to your location settings and allow access to your geolocation </p> : 
				!this.props.isGeolocationEnabled
					? <div> Geolocation is not enabled </div>
					: this.props.coords
						? <div> Location Acquired <button onClick={this.props.rememberLocation} > Remember Location </button></div>
						: <div> Getting the location data. Sometimes browsers like to really take their time  <ReactLoading type={"bars"} color={"black"}/>  </div>;
	}
}
export default geolocated({
	positionOptions: {
		enabledHighAccuracy: false,
		maximumAge: 1000*60*5, //5 minutes
		// timeout: 1000 * 5
	}
})(Geolocation);