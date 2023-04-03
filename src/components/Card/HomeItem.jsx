import { Link } from 'react-router-dom'
import '../../styles/HomeItem.css'
import PropTypes from 'prop-types'

function HomeItem({ id, title, cover }) {
	return (
		<div className='k-home-card' >
		<Link to={`/logement/${id}`}  >
			<article className='card'>
				<h3>{title}</h3>
				<div className='k-home-overlay'></div>
				<img className='k-cover' src={cover} alt={`${title} cover`} />
			</article>
		</Link></div>
	)
}
//Sécurisation des props
HomeItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}
 


export default HomeItem