import { useState } from "react";
import Playlist from "../playlist";
import RecomMusic from "../createplaylist";

function FuncSearch({token}) {

    const [music, setMusic] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [selectedTrack, setSelectedTrack] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const music = await fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=track&limit=15`, {
            headers: {
                Authorization: `Bearer ${token}`}
                });
        const musicJson = await music.json();
        setMusic(musicJson.tracks.items);
    };


    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };
    

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" className="search-bar" value={keyword} onChange={handleInputChange} />
                <button type="submit" className="btn-search">Search</button>
            </form>
            <div className="list-music">
                <RecomMusic music={selectedTrack} token={token}  />
            </div>
            <div>
                <Playlist music={music} track={selectedTrack} setSelectedTrack={setSelectedTrack} />
            </div>
        </div>
    );
}

export { FuncSearch };