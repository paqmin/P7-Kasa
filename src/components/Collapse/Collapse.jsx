import React from "react";
import {useState} from 'react'
import '../../styles/Collapse.css'
import fleche from '../../assets/fleche.svg'


function Collapse(data){
    const [isClosed, setIsClosed] = useState(false)
    return isClosed ?(
        <article className='kasa-collapse' >
            <button className="titre-collapse" onClick={() => setIsClosed(false)}>
                {data.titre} <img className="fleche-up" src={fleche} alt="fleche" />
            </button>
            <div className="description-collapse"> {data.texte}</div>
        </article>
) : (
    <article className='kasa-collapse' >
        <button className="titre-collapse" onClick={() => setIsClosed(true)}>
            {data.titre} 
            <img className="fleche-down" src={fleche} alt="fleche" />
        </button> 
    </article>
    )
}

export default Collapse