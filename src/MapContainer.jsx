import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import GoogleMapReact from 'google-map-react';
 
export class MapContainer extends Component {
render() {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const style = {
    width: '100%',
    height: '100%'
  }
  
    return (
      <Map
      google={this.props.google}
      style={style}
      initialCenter={{
        lat: 17.3850,
        lng:78.4867
      }}
      zoom={10}
      onClick={this.onMapClicked}
    />
    );
   
    const WithMarkers = React.createClass({
      onMarkerClick: function(props, marker, e) {
      },
      render: function() {
        return (
          <Map google={this.props.google}>
            <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
          </Map>
        )
      }
    });
    
  }
  
}


 
export default GoogleApiWrapper({
// apiKey: AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlb
})(MapContainer)
/*
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
    
    // binding this to event-handler functions
    
    this.onMapClicked = this.onMapClicked.bind(this);
  }
  
  
 
  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
 
  render(){
    return (
      <Map google={this.props.google}
          onClick={this.onMapClicked}>
        
 
       
      </Map>
    );
  }
}
*/
//export default MapContainer;
