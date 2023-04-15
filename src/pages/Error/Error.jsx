import React from "react";
import { Link } from 'react-router-dom'
import '../../styles/Error.css'

function Error() {
    return (
        <div className="Error">
            <h1>404</h1>
            <h2>Oups ! Cette page n'existe pas</h2>
            <Link to="/accueil">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error