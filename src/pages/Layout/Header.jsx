import React from "react";
import { Link } from 'react-router-dom'
import logo from '../../assets/logo-rose.svg'
import '../../styles/Header.css'


function Header() {
   
    return (
        <header className='k-header'>
            <Link to="/accueil"><img src={logo} alt='Kasa-logo' className='k-logo' /></Link>
           
            <nav className="k-menu">
                
                     <Link to="/accueil">Accueil</Link>
                    <Link to="/a-propos">A Propos</Link>
          
            </nav>
        </header>
    )
}

export default Header