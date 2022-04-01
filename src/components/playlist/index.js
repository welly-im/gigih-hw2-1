import { useState } from 'react';

import './index.css';

function Playlist({name, artist, url, images, uri, song}) {

    //selectedSong is the song that is selected by the user
    const [selectedSong, setSelectedSong] = useState({
        'id': [],
    'tracks': [],
    });

    const selectSong = (song) => {
        const tempSong = [...selectedSong.tracks, song];
        const tempIdSong = [...selectedSong.id, song.uri];

        setSelectedSong({
            'id': tempIdSong,
            'tracks': tempSong,
        });
    };

    const deselectSong = (song) => {
        const i = selectedSong.id.indexOf(song.uri);
        const tempSong = selectSong.tracks.slice(0, i).concat(selectSong.tracks.slice(i + 1));
        const tempIdSong = selectSong.id.slice(0, i).concat(selectSong.id.slice(i + 1));
        setSelectedSong({
            'id': tempIdSong,  
            'tracks': tempSong,
        });
    };


    console.log(selectedSong);
    
    //create a button select when click change to deselect
    const [selected, setSelected] = useState(false);

    //create a button select when click change to deselect
    const handleClick = () => {
            setSelected(!selected);
            if(!selected){
                selectSong(song);
            }else{
                deselectSong(song);
            }
    }

    return(
        <>
            <div className='Playlist-component'>
                <table className="list-music">
                    <tbody>
                        <tr>
                            <td className='Image'>
                                <img src={images} alt={name} />
                            </td>
                            <td className='Playlist-info'>
                                <p className='title-song'>{name}</p>
                                <p  className='artist'>{artist}</p>
                                <button className='btn-select' onClick={handleClick}>{selected ? 'Deselect' : 'Select'}</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
        
        
    );
}

export default Playlist;
