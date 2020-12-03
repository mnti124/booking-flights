import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import Button from './Button'
function Footer() {
    return (
        <div className="footer-container">
            {/* Part 1: top section */}
            <section className="footer-subscription">
                <p className="footer-sub-heading">
                    Join our newsLetter to receive the best flights avaliable
                </p>
                <p className="footer-sub-text">You can unsubscribe anytime</p>
                <div className="footer-input-areas">
                    <form>
                        <input type="text" placeholder="Your Email" className="footer-input-email"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            {/* Part 2: Links */}
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-item">
                        <h2>About Us</h2>
                        <Link to="/about">
                            Team
                        </Link>
                        <Link to="/about">
                            What We Do
                        </Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>Contact Us</h2>
                        <Link to="/about">
                            Support
                        </Link>
                        <Link to="/about">
                            Donate
                        </Link>
                    </div>
                    <div className="footer-link-item">
                        <h2>Social Media</h2>
                        <Link to="/about">
                            Facebook
                        </Link>
                        <Link to="/about">
                            Instagram
                        </Link>
                    </div>
                </div>
                    
            </div>
            <section className="social-media-container">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            MN<i className="fab fa-pied-piper-square"></i>
                        </Link>
                    </div>
                    <small>MN@2020 copyright</small>
                    <div className="social-media-icons">
                        <Link to="/" 
                        target="_blank" 
                        className="social-icon-link facebook"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </Link>
                        <Link to="/" 
                        target="_blank" 
                        className="social-icon-link instagram"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" 
                        target="_blank" 
                        className="social-icon-link youtube"
                        aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                    
                    
                </div>
            </section>
        </div>
    )
}

export default Footer
