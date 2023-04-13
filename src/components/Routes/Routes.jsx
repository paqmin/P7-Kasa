import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import Accueil from '../../pages/Accueil/Accueil'
import Apropos from '../../pages/Apropos/Apropos'
import Layout from '../../pages/Layout/Layout'
import Fiche from '../../pages/Fiches/Fiche-logement'
import Error from '../../pages/Error/Error'


function RoutesPath() {
    return(
        <Router>
            <Layout>
                    <Routes basename={"/P7-Kasa"}>
                        <Route path="/accueil" element={<Accueil />} />
                        <Route path="/" element={<Navigate replace to="/accueil" />} />
                        <Route path="/logement/:id" element={<Fiche />}/>
                        <Route path="/a-propos" element={<Apropos />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
			</Layout>
        </Router>
        );
}

export default RoutesPath;