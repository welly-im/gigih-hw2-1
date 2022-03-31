import { Component } from "react";
import Playlist from "../playlist";
import "./index.css";

class Search extends Component{
    state = { music:[], keyword:""};

    handleSubmit = async (e) => { 
        e.preventDefault();
        const music = await fetch(`https://api.spotify.com/v1/search?q=${this.state.keyword}&type=track&limit=15`, {
            headers: {
                Authorization: `Bearer ${this.props.token}`}
                });
        const musicJson = await music.json();
        this.setState({music:musicJson.tracks.items});
    };

    handleInputChange = (e) => {
        this.setState({keyword:e.target.value});
    };

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="search-bar" value={this.state.keyword} onChange={this.handleInputChange}/>
                    <button type="submit" className="btn-search">Search</button>
                </form>
                <div>
                    {this.state.music.map(item => (
                        <Playlist key={item.id} 
                        name={item.name} 
                        artist={item.artists[0].name} 
                        url={item.external_urls.spotify} 
                        images={item.album.images[0].url} />
                    ))}
                </div>
            </div>
        );
    }

}

export default Search;