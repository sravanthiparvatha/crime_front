import React from 'react';
class Registerform extends React.Component{
    render()
    {
        return( <form   autocomplete="on"> 
        <h1> Sign up </h1> 
        <p> 
            <label for="usernamesignup" className="uname" >Your username</label>
            <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
        </p>
        <p> 
            <label for="emailsignup" className="youmail"  > Your email</label>
            <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com"/> 
        </p>
        <p> 
            <label for="passwordsignup" className="youpasswd" >Your password </label>
            <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO"/>
        </p>
        <p> 
            <label for="passwordsignup_confirm" className="youpasswd" >Please confirm your password </label>
            <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO"/>
        </p>
        <p className="signin button"> 
<input type="submit" value="Sign up"/> 
</p>
        <p className="change_link">  
Already a member ?
<a href="#tologin" className="to_register"> Go and log in </a>
</p>
    </form>);
    }
}
export default Registerform; 