import Banner from '../../components/Banner/Banner'
import banner_img from '../../assets/banner.png'
import Logement from '../../pages/Logements/Logement';


function Accueil() {
    return (
      <div>
        <Banner image={banner_img} texte="Chez vous, partout et ailleurs"/>
        <Logement />
      </div>
    )
    }
export default Accueil;
