import React from 'react';

class Header extends React.Component {
 
    render() {
        return(<div><nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
    
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#register">LOGIN</a></li>
        <li><a href="#signup">SIGNUP</a></li>
        
        <li><a href="#search">SEARCH</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>
<br/>

</div>
  
        )}
}
export default Header;