import { React, useState, useEffect } from 'react'
import './NavBar.css';
import { Link, useHistory } from 'react-router-dom';
import Button from './Button'
import Payment from './pages/Payment';
import {auth} from './../firebase';
import {useStateValue} from './../StateProvider';

function NavBar(){
    //State of clicked element
    const [click, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    //state of user
    const [{user}, dispatch] = useStateValue();

    //Handles user logout
    const handleUserLogout = ()=>{
        auth.signOut()
        .then(()=>{
            console.log('User signedout')
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    const handleClick = ()=>{
        setClicked(!click);
    }
    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    }
    useEffect(()=>{
        showButton();
    }, [])

    window.addEventListener('resize', showButton);
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link className="nav-logo" to="/">
                    MN <i className="fab fa-pied-piper-square"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click? 'fas fa-times':'fas fa-bars' }></i>
                </div>
                <div>
                    
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/book-now" className="nav-link">
                            Book Now
                            
                        </Link>
                        {/* <Payment /> */}
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={user? "/":"/login"} className="nav-link-mobile" onClick={handleUserLogout}>
                            {user? 'SIGN OUT': 'SIGN IN'}
                            
                           
                        </Link>
                    </li>
                </ul>
                {user? <div className="nav__username"><h3>Welcome,</h3><span>{user.email}</span></div>: ''}
                {button && <Button buttonStyle="btn--outline" handleLogout={handleUserLogout}>{user? 'SIGN OUT': 'SIGN IN'}</Button>}
                
            </div>
        </nav>
    )
}

export default NavBar
