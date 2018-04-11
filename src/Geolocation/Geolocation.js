import React, { Component } from 'react';
import ReactLoading from 'react-loading';

import { geolocated } from 'react-geolocated';

class Geolocation extends Component {

	render() {
		return !this.props.isGeolocationAvailable
			? <div> Your browser does not support Geolocation </div>
			: !this.props.isGeolocationEnabled
				? <div> Geolocation is not enabled </div>
				: this.props.coords
					? <div> Location Acquired </div>
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