import React from 'react'
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom'
import Accueil from '../../pages/Accueil/Accueil'
import Apropos from '../../pages/Apropos/Apropos'
import Layout from '../../components/Layout/Layout'
import Fiche from '../../pages/Fiches/Fiche-logement'
import Error from '../../pages/Error/Error'


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                    <Routes >
                        <Route path="/kasa/" element={<Navigate replace to="/accueil" />} />
                        <Route path="/accueil" element={<Accueil />} />
                        <Route path="/" element={<Navigate replace to="/accueil" />} />
                        <Route path="/logement/:id" element={<Fiche />}/>
                        <Route path="/a-propos" element={<Apropos />} />
                        <Route path="/404" element={<Error />} />
                    </Routes>
			</Layout>
        </HashRouter>
        );
}

export default RoutesPath;