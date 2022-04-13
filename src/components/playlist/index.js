import './index.css';
import React from "react";
import PropTypes from 'prop-types';



function Playlist({ music, track, setSelectedTrack }) {

    

    Playlist.PropTypes = {
        music: PropTypes.array.isRequired,
        track: PropTypes.array.isRequired,
        setSelectedTrack: PropTypes.func.isRequired
    }

    const handleClickSelectSong = (e) => {
        const id = e.target.getAttribute('data-uri'); //get the id of the song
        const index = track.findIndex((song) => song.uri === id); //find the index of the song
        if (index === -1) { //if the song is not in the array
            const getDataSongFromId = music.filter((song) => song.uri === id); //get the song from the id
            setSelectedTrack([...track, getDataSongFromId[0]]); //add the song to the array
            //make selected button to deselect button by id
            e.target.innerText = 'Deselect'; 
            e.target.className = 'btn-deselect';
        } else {
            setSelectedTrack(track.filter(song => song.uri !== id)); //remove the song from the array
            e.target.innerText = 'Select'; 
            e.target.className = 'btn-select';
        }
    };


    return(
        <>
            {
                music.map(song => (
                    <div className='Playlist-component' key={song.uri}>
                    <table className="list-music">
                        <tbody>
                            <tr>
                                <td className='Image'>
                                    <img src={song.album.images[0].url} alt={song.name} />
                                </td>
                                <td className='Playlist-info'>
                                    <p className='title-song'>{song.name}</p>
                                    <p  className='artist'>{song.artists[0].name}</p>
                                    
                                </td>
                                <td>
                                    <button className='btn-select' data-uri={song.uri} onClick={handleClickSelectSong}>Select</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                ))
            }
        </>
    );
}

export default Playlist;
