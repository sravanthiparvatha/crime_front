import React from 'react';
import './Explore.css';
class Explore extends React.Component{
render(){
return(<section className="section-padding hero">
      <div className="text">
        <div className="vertical-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 col-md-offset-1">
              <div id="w">  <h1>Welcome to  CrimeAnalysis</h1></div>
                <h2>Search over 1000 departments by name, region, or zip code</h2>
                <div className="searchbar">
              <div id="i" className="container">
              <div className="row">
            
             <button className="btn btn-success"> Explore the Map</button><br/>
                    or   <div id="search-container" role="search">
                        <input name="location" type="text" id="location-search" placeholder="Search CrimeReports" autocomplete="off" aria-label="Search CrimeReports" />
                      </div>
                      </div>
           </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </section>);
    }
}
export default Explore;