//create react functional component

import './index.css';

function Playlist({images, titleSong, artist, url}) {
    return(
        <div className='Playlist-component'>
            <div className='Image'>
                <img src={images} />
            </div>
            <div className='Playlist-info'>
                <h4>Album</h4>
                <p className='title-song'>{titleSong}</p>
                <p className='artist'>{artist}</p>
                <a href={url} target='_blank'><button className='btn-select'>Select</button></a>
            </div>
        </div>
        
    );
}

export default Playlist;
