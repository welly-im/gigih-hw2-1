import './index.css';

function RecomMusic({music}) {
    return(
        <>
        {
            music.length > 0 ?
                <div>
                    <div>
                        <p>Create Playlist</p>
                    </div>
                    <div className='selected-music'>
                            {
                                music.map(song => (
                                    <div className='RecomMusic-component' key={song.uri}>
                                        <a href="#">
                                            <div className='music-card'>
                                                <img className='music-images' src={song.album.images[0].url} alt='music' />
                                                <p className='music-title'>{song.name}</p>
                                                <p className='music-artist'>{song.artists[0].name}</p>
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                :
                <div>
                </div>  
        
        }
    </>
            
    );
}

export default RecomMusic;