import React, { Component } from 'react';

import Registerform from './Registerform';
import './App.css';
import Loginform from './Loginform';

class App extends Component {
  render() {
    return (
      <div className="container">
        
        
        <section>				
            <div id="container_demo" >
                
            <a className="hiddenanchor" id="toregister"></a>
                <a className="hiddenanchor" id="tologin"></a>
                <div id="wrapper">
                    <div id="login" className="animate form">
                    <Loginform>
                        </Loginform>
                    </div>

                    <div id="register" className="animate form">
                        <Registerform handleRegister={this.handleRegister}>
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
