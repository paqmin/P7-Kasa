import React from "react";
import "../../styles/Layout.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function Layout({children}) {
    return (
        <main>
       <div className="contenu">
            
            <Header />
            {children}
            
       </div>
       <Footer /></main>
    );
}

export default Layout;