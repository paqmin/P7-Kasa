import '../../styles/Banner.css'

function Banner({image, texte}) {

    return (
        <div className='k-banner'>
            <img src={image} alt='background-banner' className='back-banner' />
            <div className="overlay-banner"></div>
            <div className='txt-banner'>{texte}</div>   
        </div>
    )
}

export default Banner