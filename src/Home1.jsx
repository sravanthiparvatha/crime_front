import React, { Component } from 'react';

import Registerform from './Registerform';
import './App.css';
import Header from './Header';
import SlideImages from './SlideImages';
import Explore from './Explore';
import { Route } from 'react-router-dom';
import Home from './Home';

import logo from './logo.svg';
import Loginform from './Loginform';



class Home1 extends Component {
 
  render() {
    return (
     <div>
  <Route path=""  component={Home}/>
      
    </div>
    );
  }
}

export default App;
