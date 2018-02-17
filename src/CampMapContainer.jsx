import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
 
let coords = {
    lat: 17.3850,
    lng:78.4867
};

 
const params = {v: '3.exp', key: 'AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM'};
 
class CampMapContainer extends React.Component {
 
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }
 
  onDragEnd(e) {
    console.log('onDragEnd'+' hii '+e.latLng.lat(), e);
    //coords=e.latLng;
    coords.lat=e.latLng.lat();
    coords.lng=e.latLng.lng();
   // console.log('after cords change '+coords.lat+' longii'+coords.lng);
  }
 
  onCloseClick() {

    console.log('onCloseClick');
  }
 
  onClick(e) {
   
    console.log('onClick '+coords.lat +coords.lng+'  hello  '+ e.latlng, e.latlng);
coords=e.latLng;
  }
 
  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}
        onClick={this.onClick}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, Move me to crime location :)'}
          onCloseClick={this.onCloseClick} />
       
         
      </Gmaps>
    );
  }
 
};
export default CampMapContainer;
 