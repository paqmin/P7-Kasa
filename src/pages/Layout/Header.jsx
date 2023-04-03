import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-rose.svg'
import '../../styles/Header.css'


function Header() {
   
    return (
        <header className='k-header'>
            <img src={logo} alt='Kasa-logo' className='k-logo' />
           
            <nav className="k-menu">
                <ul>
                     <li><Link to="/accueil">Accueil</Link></li>
                    <li><Link to="/a-propos">A propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header