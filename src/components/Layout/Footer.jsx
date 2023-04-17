import React from "react";
import logo from '../../assets/logo-blanc.png'
import '../../styles/Footer.css'


function Footer() {
   
    return (
        <footer >
            <div className="footer-container">
                <img src={logo} alt='Kasa-logo' className='k-logo-footer' />
                <p> &copy; 2022 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer