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
        <section className='Carrousel-content'>
             {/*boutons de navigation qui ne s'affichent qu'à partir de 2 images*/}
        {SlidesLength > 1 && (<img src={left} className="vectorPrev" onClick={prevSlide} alt="fleche_gauche" />)}
        {SlidesLength > 1 && (<img src={right} className="vectorNext"  onClick={nextSlide} alt="fleche_droite" />)}
        
        {/*Affichage d'une image*/}
        {slides.map((slide, index) =>(
        <div key={index} className="slider">
            {index === current && <img src={slide} alt="Photo_appart"/>} {/*Affichage d'une image*/}
            {index === current && (<span className="numero_img_courante"> {/*Affichage numérotation*/}
                                     {current + 1}/{SlidesLength}
						            </span>
			                        )}
        </div> 
        ))}
        </section>
        );
}
export default Carrousel