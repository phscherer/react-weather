import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.maps, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lon: this.props.lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}

export default GoogleMap;
