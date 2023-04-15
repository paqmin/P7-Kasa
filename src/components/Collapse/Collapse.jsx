import React from "react";
import {useState} from 'react'
import '../../styles/Collapse.css'
import fleche from '../../assets/fleche.svg'


function Collapse(data){
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ?(
        <article className='kasa-collapse' >
            <button className="titre-collapse" onClick={() => setIsOpen(false)}>
                {data.titre} <img className="fleche-up" src={fleche} alt="fleche" /></button>
          <div className="description-collapse"> {data.texte}
          </div>
        </article>
) : (
    <article className='kasa-collapse' >
    <button className="titre-collapse" onClick={() => setIsOpen(true)}>
       {data.titre} <img className="fleche-down" src={fleche} alt="fleche" />
    </button> </article>
    
    )
}

export default Collapse