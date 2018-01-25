import React from 'react';
class Loginform extends React.Component{
    render()
    {
        return( 
            <form   autoComplete="on"> 
                            <h1>Log in</h1> 
                            <p> 
                                <label htmlFor="username" className="uname" > Your email or username </label>
                                <input id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com"/>
                            </p>
                            <p> 
                                <label htmlFor="password" className="youpasswd"> Your password </label>
                                <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" /> 
                            </p>
                            <p className="keeplogin"> 
              <input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
              <label htmlFor="loginkeeping">Keep me logged in</label>
            </p>
                            
                            <p className="change_link">
              Not a member yet ?
              <a href="#toregister" className="to_register">Join us</a>
            </p>
                        </form>
        );

    }
}
export default Loginform;