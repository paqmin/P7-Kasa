import { homeList } from '../../datas/homeList'
import '../../styles/Fiche_logement.css'
import {React} from "react"
import Collapse from '../../components/Collapse/Collapse';
import NoteEtoile from '../../components/Note/Note';
import Carousel from '../../components/Carousel/Carousel';
import { useParams, Navigate  } from "react-router-dom";



function Fiche() {

    //Recuperation données du logement
    const id = useParams();
    const ficheLogement = homeList.find(logement => logement.id === id.id);
    const equipmentList = ficheLogement?.equipments.map((item, index) => (
                <li key={index} className="equipmentList">
                    {item}
                </li>
    )); ;
   
    return (
        <>
        {ficheLogement ? (
      <div className='Fiche'>
        
            <Carousel slides={ficheLogement.picture}/>
            
            <section className='Infos-content'>
                <div className='Titre-lieu'>
                <div className='Titre-lieu2'>
                    <h1>{ficheLogement.title}</h1>
                    <h2>{ficheLogement.location}</h2></div>
                    <div className='TagsBox'>
                        {ficheLogement.tags.map((tag, index) => {
                            return (
                                <span className='Tags' key={index}>{tag}</span>
                            )
                        })}
                    </div>
                </div>
                <div className='Proprio-note'>
                   
                    <div className='Notes'>
                        <NoteEtoile rating={ficheLogement.rating} />
                    </div>
                    <div className='Proprio_card'>
                        <h2>{ficheLogement.host.name}</h2>
                        <img src={ficheLogement.host.picture} alt="Photo_proprio" />
                    </div>
                </div>
            </section>
            <section className='Collapse-content'>
                <div className='description'>
                        <Collapse titre="Description" texte={ficheLogement.description} />
                </div>
                <div className='description'>
                        <Collapse titre="Equipements" texte={equipmentList} />
                </div>
            </section>
        
      </div>
      ) : (
        <Navigate replace to="/404"/>
      )}
      </>)
}

export default Fiche;
