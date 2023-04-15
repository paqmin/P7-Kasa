import { Link } from 'react-router-dom'
import '../../styles/HomeItem.css'
import PropTypes from 'prop-types'

function HomeItem({ id, title, cover }) {
	return (
		
		<Link className='k-home-card' to={`/logement/${id}`}  >
				<img className='k-cover' src={cover} alt={`${title} cover`} />
				<div className='k-home-overlay'></div>
				<h3>{title}</h3>
		</Link>
	)
}
//Sécurisation des props
HomeItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}
 


export default HomeItem