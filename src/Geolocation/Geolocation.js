import React, { Component } from 'react';
import { geolocated } from 'react-geolocated';

class Geolocation extends Component {

	render() {
		return !this.props.isGeolocationAvailable
			? <div> Your browser does not support Geolocation </div>
			: !this.props.isGeolocationEnabled
				? <div> Geolocation is not enabled </div>
				: this.props.coords
					? <div> {this.props.coords.latitude} :: {this.props.coords.longitude} </div>
					: <div> Getting the location data&hellip; </div>;
	}
}
export default geolocated({
	positionOptions: {
		enabledHighAccuracy: false,
	}
})(Geolocation);