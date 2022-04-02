import './index.css';

function Playlist({music, track, setSelectedTrack}) {

    const handleClickSelectSong = (e) => {
        const id = e.target.getAttribute('data-uri');
        const index = track.findIndex((song) => song.uri === id);
        if (index === -1) {
            const getDataSongFromId = music.filter((song) => song.uri === id);
            setSelectedTrack([...track, getDataSongFromId[0]]);
            //make selected button to deselect button by id
            e.target.innerText = 'Deselect'; 
            e.target.className = 'btn-deselect';
        } else {
            setSelectedTrack(track.filter(song => song.uri !== id)); //fungsi menghapus data yang sama
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
