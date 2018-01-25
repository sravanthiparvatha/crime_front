import React, { Component } from 'react';

import Registerform from './Registerform';
import './App.css';
import Header from './Header';
import SlideImages from './SlideImages';
import logo from './logo.svg';



class App extends Component {
 
  render() {
    return (
      <div className="container">
      <Header>
        </Header>
        <section>		
         	
            <div >
              <SlideImages>
                </SlideImages>
               <div id="wrapper">
                    <div id="register" className="animate form">
                        <Registerform handleRegister={this.handleSubmit}>
                            </Registerform>
                    </div>
        
                </div>
            </div>  
        </section>
      </div>
    );
  }
}

export default App;
