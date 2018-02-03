
import React from 'react';
//import logo from './logo.svg';
import './SlideImages.css';


class SlideImages extends React.Component
{
    render(){
        return(<div id="myCarousel" className="carousel slide" data-ride="carousel">
 
 <ol className="carousel-indicators">
   <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
   <li data-target="#myCarousel" data-slide-to="1"></li>
   <li data-target="#myCarousel" data-slide-to="2"></li>
 </ol>

 <div className="carousel-inner" >
   <div className="item active">
     <img className="d-block w-100 img-fluid"  src="crimeuigif.jpg"  alt="First Slide" />
     <div className="carousel-caption">
      
     </div>      
   </div>

   <div className="item">
     <img  className="d-block w-100 img-fluid" src="police2.jpeg" alt="crime" />
     <div className="carousel-caption">
       
     </div>      
   </div>
 
   <div className="item">
     <img src="signupcrime.jpeg" alt="Los Angeles" className="d-block w-100 img-fluid" />
     <div className="carousel-caption">
       
     </div>      
   </div>
 </div>

 
 <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
   <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
   <span className="sr-only">Previous</span>
 </a>
 <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
   <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
   <span className="sr-only">Next</span>
 </a>
</div>
)
    }
}
export default SlideImages;