import React,{useState} from "react";
import left from "../../assets/VectorLeft.svg";
import right from "../../assets/VectorRight.svg";
import '../../styles/Carousel.css'



function Carrousel({slides}){
    //index 1er slide définit à 0
    const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
	//longueur tableau d'images
    const SlidesLength = slides.length; 

    //si c'est la dernière image, on repart au 1er slide, sinon on passe au suivant
    const nextSlide = () => {
        setCurrent(current === SlidesLength - 1 ? 0 : current + 1);
      };
       //si c'est la première image, on passe au dernier slide, sinon on passe au précédent
    const prevSlide = () => {
        setCurrent(current === 0 ? SlidesLength - 1 : current - 1);
      };
    
    return(
        <div className="slider">
        {/*boutons de navigation qui ne s'affichent qu'à partir de 2 images*/}
        
        {SlidesLength > 1 && (<button className="vectorPrev">
                                <img src={left} onClick={prevSlide} alt="fleche_gauche" />
                            </button>)}
        {SlidesLength > 1 && (<button className="vectorNext">
                                <img src={right} onClick={nextSlide} alt="fleche_droite" />
                             </button>)
        }
        {/*Affichage d'une image*/}
        {slides.map((slide, index) =>(
        <div key={index} className="images_appart">
            {index === current && <img src={slide} alt="Photo_appart"/>} {/*Affichage d'une image*/}
            {index === current && (<span className="numero_img_courante"> {/*Affichage numérotation*/}
                                     {current + 1}/{SlidesLength}
						            </span>
			                        )}
        </div>
        
        ))}
        </div>
        );
}
export default Carrousel