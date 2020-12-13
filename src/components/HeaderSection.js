import React from 'react';
import './HeaderSection.css'
import Button from './Button';
import {Link} from 'react-router-dom'
function HeaderSection() {
    return (
        <>
        <div className="header-img-blur"></div>
        <div className="header-container">
            {/* <video src="/videos/video-1.mp4" autoPlay muted></video> */}
            <h1>LET'S TRAVEL</h1>
            <h2>What are you waiting for?</h2>
            <div className="header-btns">
                <Link to="/flights">
                    <Button buttonStyle="btn--outline">BOOK A FLIGHT <i className="fas fa-plane-departure"></i></Button>
                </Link>
                
                <Button buttonStyle="btn--primary">LEARN MORE </Button>
            </div>
            
        </div>

        </>
    )
}

export default HeaderSection
