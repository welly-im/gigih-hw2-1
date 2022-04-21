import './index.css';
import React, {useState} from "react";
import { Alert } from '@mui/material';

function RecomMusic({music, token}) {

    const [openAlert, setOpenAlert] = useState(false);

    const handlePost = async (e) => {

        e.preventDefault();

        console.log(token)

        // //get user id from spotify api
        // const userId = await fetch(`https://api.spotify.com/v1/me`, {
        //     headers: {
        //         'Authorization': `Bearer ${token}`
        //     }
        // })
        // .then(res => res.json())
        // .then(data => data.id)

        // //create playlist in spotify api
        // const playlistId = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer ${token}`,
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: e.target.title.value,
        //         description: e.target.description.value,
        //         public: false,
        //         collaborative: false
        //     })
        // })
        // .then(res => res.json())
        // .then(data => data.id)

        // const track = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        //     method: "POST",
        //     headers: {
        //         Authorization: `Bearer ${token}`,
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         uris:  music.map(elem => elem.uri),
        //         position: 0
        //     })
        // });
        // const trackJson = await track.json();
        // console.log(trackJson);

        //alert from material ui 

        setOpenAlert(true);

        setTimeout(() => {
            setOpenAlert(false);
        }, 3000);

    };

    return(
        <>
        {
            music.length > 0 ?
                <div className='create-playlist'>
                {
                        openAlert ?  (
                            <div className='alert'>
                            <Alert severity="success" open={openAlert} onClose={() => setOpenAlert(false)}>
                                Playlist created!
                            </Alert>
                        </div>
                        ) : (
                            <></>
                        )
                    }
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