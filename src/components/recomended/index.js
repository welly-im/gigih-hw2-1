
import './index.css';

function RecomMusic({name, artist, url, images}) {

    return(
        <div>
            <a href={url} target='_blank' >
                <div className='music-card'>
                    <img className='music-images' src={images} alt='music' />
                    <p className='music-title'>{name}</p>
                    <p className='music-artist'>{artist}</p>
                </div>
            </a>
        </div>
    );
}

export default RecomMusic;