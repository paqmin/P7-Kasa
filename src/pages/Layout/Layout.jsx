import React from "react";
import "../../styles/Layout.css";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

function Layout({children}) {
    return (
      
       <div className="contenu">
            
        <Header />
            <main> {children}</main>
       <Footer />
       </div>
    );
}

export default Layout;