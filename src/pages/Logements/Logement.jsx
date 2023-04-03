import { homeList } from '../../datas/homeList'
import HomeItem from '../../components/Card/HomeItem'
import '../../styles/Logements.css'

function Logement() {

    return (
        <section className='Galerie'>
			
					{homeList.map(home => (
						
						<HomeItem
								key={home.id}
								id={home.id}
								cover={home.cover}
								title={home.title}
							/> 
						
					))}
			
        </section>
    )
}

export default Logement