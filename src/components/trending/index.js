import React, { useState,useEffect } from "react";
import './index.css';
function Trending() {
    const token = localStorage.getItem("token")
    //create a ref to the trending container
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const url = "https://api.spotify.com/v1/browse/new-releases?&market=ES&limit=14";
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
        <>

            {
                trending.length > 0 ? (
                    <div className='highlight-container'>
                    <img className='highlight-images' src={trending[0].images[0].url}/>
                    <div className='highlight-text'>
                        <h1>{trending[0].name}</h1>
                        <p>{trending[0].artists[0].name}</p>
                    </div>
                </div> )
                :
                <></>
            }

            <div className="trending">
                <h2>New Release</h2>
                <div className="trending-container">
                    {trending.map(song => (
                        <div className='RecomMusic-component' key={song.uri}>
                        <a href={song.external_urls.spotify} target='_blank' rel="noreferrer">
                            <div className='music-card'>
                                <img className='music-images' src={song.images[0].url} alt='music' />
                                <p className='music-title'>{song.name}</p>
                                <p className='music-artist'>{song.artists[0].name}</p>
                            </div>
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </>


        
    );

}

export default Trending;