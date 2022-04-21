import React, { useState } from "react";
import Playlist from "../playlist";
import RecomMusic from "../createplaylist";
import Trending from "../trending";
import './index.css'

function FuncSearch() {
    const token = localStorage.getItem("token");
    const [music, setMusic] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [selectedTrack, setSelectedTrack] = useState([]);

    const handleSearch = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const music = await fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=15`, {
            headers: {
                Authorization: `Bearer ${token}`}
                });
        const musicJson = await music.json();
        setMusic(musicJson.tracks.items);
        
    };

    const handleInputChange = (e: { target: { value: string }; }) => {
        setKeyword(e.target.value);
    };

    return (
            <div>
                <div className="search">
                    <div className="search-component">
                    <p> Search Music </p>
                        <form onSubmit={handleSearch}>
                            <input type="text" className="search-bar" value={keyword} onChange={handleInputChange} />
                            <button type="submit" className="btn-search">Search</button>
                        </form>
                    </div>
                </div>
                <div className={
                    selectedTrack.length > 0 ? "openflex" : "closeflex"
                }>
                    <div className="selected-track">
                        <RecomMusic music={selectedTrack} token={token}  />
                    </div>
                    <div>
                        {
                            music.length < 1 ?(
                                <Trending />
                            ) : (
                                <Playlist music={music} track={selectedTrack} setSelectedTrack={setSelectedTrack} />
                            )
                        }
                        
                    </div>
                </div>
            </div>
    );
}

export default FuncSearch;