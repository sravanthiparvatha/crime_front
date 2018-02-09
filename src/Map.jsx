import React, { Component } from 'react';
//import 
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
var map =new google.maps.Map(document.getElementById('map'),options);
//Add marker
var marker = new google.maps.Marker({position:{lat: 17.3850,lng:78.4867}, map:map})    
    }  
return(<html>
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9tvO2YPEmjQcNKGWyrV37vYRU7hdKlbM&callback=initMap">
</script>

<div id="map"></div>
</html>);
}


} 
export default Map;