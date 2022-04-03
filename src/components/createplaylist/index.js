import './index.css';

function RecomMusic({music, token}) {
    
    const handlePost = async (e) => {
        e.preventDefault();
        const track = await fetch(`https://api.spotify.com/v1/playlists/2X9oMOlktC9ei95Br6fpS9/tracks`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                uris:  music.map(elem => elem.uri),
                position: 0
            })
        });
        const trackJson = await track.json();
        console.log(trackJson);
    };

    return(
        <>
        {
            music.length > 0 ?
                <div className='create-playlist'>
                    <div className='form-input'>
                        <p>Create Playlist</p>
                        <form onSubmit={handlePost} className='form-playlist'>
                            <label htmlFor='title'>Title</label>
                            <input 
                            id="title"
                            type="text" 
                            name="title" 
                            placeholder="Input Here" 
                            className='title-input' 
                            minLength='10'
                            />
                            <label htmlFor='description'>Description</label>
                            <textarea 
                            id="description"
                            type="text" 
                            name="description" 
                            placeholder="Input Here"  
                            className='desc-input'/>
                            <button type="submit" className='btn-submit'>Create</button>
                        </form>

                    </div>
                    <div className='selected-music'>
                        {
                            music.map(song => (
                                <div className='RecomMusic-component' key={song.uri}>
                                    <a href={song.album.images[0].url} target='_blank' rel="noreferrer">
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