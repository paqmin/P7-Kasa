import React from "react";
import EtoileRose from "../../assets/etoileRose.svg";
import EtoileGrise from "../../assets/etoileGrise.svg";


function NoteEtoile (props) {
    let Etoiles = props.rating;
    const Score = [];
    const ScoreMax = 5;

        for (let i=0 ; i < ScoreMax; i++){
            if (i < Etoiles){
                Score.push (<img key={i} src={EtoileRose} alt={`${props.rating}/5`}/>)
                console.log (Score);
            }else {
                Score.push (<img key={i} src={EtoileGrise} alt={`${props.rating}/5`}/>)
                console.log (Score);
            }
            
        }
return <div className="Stars">{Score}</div>

}
export default NoteEtoile