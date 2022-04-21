import React, { useState,useEffect } from "react";
import './index.css';
function Trending() {
    const token = localStorage.getItem("token")
    //create a ref to the trending container
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const url = "https://api.spotify.com/v1/browse/new-releases?&limit=15";
        const headers = {
            Authorization: `Bearer ${token}`
        };
        fetch(url, { headers })
            .then(res => res.json())
            .then(data => {
                setTrending(data.albums.items);
            }
            );
    }, [token]);

    return (
        <div className="trending">
            <h2>Trending</h2>
            <div className="trending-container">
                {trending.map(song => (
                    <div className='Playlist-component' key={song.id}>
                        <table className="list-music">
                            <tbody>
                                <tr>
                                    <td className='Image'>
                                        <img src={song.images[0].url} alt={song.name} />
                                    </td>
                                    <td className='Playlist-info'>
                                        <p className='title-song'>{song.name}</p>
                                        <p  className='artist'>{song.artists[0].name}</p>
                                        
                                    </td>
                                    {/* <td>
                                        <button className='btn-select' data-uri={song.id} onClick={handleClickSelectSong}>Select</button>
                                    </td> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Trending;