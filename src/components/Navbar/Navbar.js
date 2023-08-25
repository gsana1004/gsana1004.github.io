import React from 'react';
import '../../App.css';

const Navbar = () => {
    return (
        <div id='navbar'>
            <div className="ceo-only-link">
                <a href="/ceo-login">
                    <i className="fa fa-lock w3-xxlarge"></i>
                    <p>CEO ONLY</p>
                </a>
            </div>
            <nav className="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center">
                <img src="./images/Screenshot 2023-08-08 at 11.40.12 AM.png" style={{width:"100%"}} alt='' />
                <a href="#" className="w3-bar-item w3-button w3-padding-large w3-black">
                    <i className="fa fa-home w3-xxlarge"></i>
                    <p>HOME</p>
                </a>
                <a href="#mover" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-bullhorn w3-xxlarge"></i>
                    <p>GOALS</p>
                </a>
                <a href="#customers" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-eye w3-xxlarge"></i>
                    <p>CUSTOMERS</p>
                </a>
                <a href="#driver-application" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-truck w3-xxlarge"></i>
                    <p>MOVERS</p>
                </a>
                <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-envelope w3-xxlarge"></i>
                    <p>CONTACT</p>
                </a>
                {/* <a href="#mover" className="w3-bar-item w3-button w3-padding-large w3-hover-black">
                    <i className="fa fa-building-o w3-xxlarge"></i>
                    <p>HQ</p>
                </a> */}
            </nav>
            <div className="w3-top w3-hide-large w3-hide-medium fixed" id="myNavbar">
                <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
                    <a href="#home" className="w3-bar-item w3-button" style={{width:"25% !important"}}>HOME</a>
                    <a href="#mover" className="w3-bar-item w3-button" style={{width:"25% !important"}}>MOVERS</a>
                    <a href="#customers" className="w3-bar-item w3-button" style={{width:"25% !important"}}>CUSTOMERS</a>
                    <a href="#contact" className="w3-bar-item w3-button" style={{width:"25% !important"}}>CONTACT</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;