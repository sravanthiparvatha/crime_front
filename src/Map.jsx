import React, { Component } from 'react';

/*//import 
class Map extends React.Component{
render()
{
    function initMap()
    {
      //Map options
var options={
zoom:8,
center:{lat: 17.3850,lng:78.4867}

}

//new Map
const google = window.google;
var map =new google.maps.Map(document.getElementById('map'),options);
//Add marker
var marker = new google.maps.Marker({position:{lat: 17.3850,lng:78.4867}, map:map})    
    }  
return(<div>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM&callback=initMap">
</script>

<div id="map"></div>
</div>);
}


} 
export default Map;*/



//import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: [] }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text={'Kreyser Avrora'}
        />
      </GoogleMapReact>
    );
  }
}
export default Map;
