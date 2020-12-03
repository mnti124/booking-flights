import React, {useState} from 'react'
import './Login.css'
import {useHistory} from 'react-router-dom'
import logo from '../images/flight__logo.png'
import {auth} from './../firebase';
function Login() {

    //declare states of inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    //Login
    const signIn = (e)=> {
        e.preventDefault();
        //Login staff goes here
        auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            //user successfully logged in
            console.log(user)
            //redirect user to home page
            history.push('/');
        })
        .catch(err => console.log(err.message));
    }


    //Register
    const register = (e) => {
        e.preventDefault();
        //Create user
        auth.createUserWithEmailAndPassword(email, password)
        .then(newuser => {
            console.log(newuser);
            //if newuser is not empty: if information inserted in form and submitted when clicked by user is not empty
            if(newuser){
                history.push('/');
            }
            
        })
        .catch(err => {
            let errMessage = err.message;
            if(errMessage === 'auth/weak password'){
                alert('The password is too weak')
            } else{
                alert(errMessage);
            }

            console.log(err)
        })
    }

    //Listens for change in input field
    const handleEmail = (e)=> {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePassword = (e)=> {
        e.preventDefault();
        setPassword(e.target.value);
    }

    
    return (
        <div className="login">
            <div className="login__wrapper">
                <img src={logo} alt="Logo"/>

                <form>
                    <label>Email</label>
                    <input type="text" value={email} onChange={handleEmail} placeholder="Email"/>
                    <label>Password</label>
                    <input type="password" value={password} onChange={handlePassword} placeholder="Password"/>

                    <button onClick={signIn} type="submit">Sign In</button>
                </form>
                {/* <p>
                    By signing in, you agree to the AMAZON FAKE CLONE 
                    Coditions of the use & sale. Please see our Privacy Notice, out Cookies Notice
                    and our Interest Based Ads Notice.
                </p> */}
                <button className="create__account" onClick={register}>Create your Account</button>
            </div>
            
        </div>
    )
}

export default Login
