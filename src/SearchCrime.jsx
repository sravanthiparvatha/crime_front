import React from 'react';
import request from 'superagent';
import './SearchCrime.css';
import CampMapContainer from './CampMapContainer';
import Filters from './Filters';


class SearchCrime extends React.Component
{
render(){
 return(<div class="wrap">
    <div className="fleft"><div  id="fil"> <h1> FILTERS</h1> </div><Filters/></div>
    <div className="fright">    <CampMapContainer/>

    </div>
    <div className="fright1">  <h3>ANALYSIS</h3></div>
</div>);
}
}

export default SearchCrime;