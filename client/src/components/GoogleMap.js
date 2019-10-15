import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {  InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';


const mapStyles = {
  width: '100%',
  height: '100%',
  marginLeft: "0%"
};




export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });


    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
    }
  };
  render() {
    
    return (
      <React.Fragment>
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
      </React.Fragment>
    );

}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBG5jzMd7mTDiza20IeHZBhM1ZS_i_We-Y'
})(MapContainer);
