import './App.css';
import { useState, useEffect } from 'react';
import Search from './components/search/index';

function App() {
    const CLIENT_ID = "25df50d26bab45709de59c1d44a5a4e1"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "playlist-modify-private"

    // state = {
    //     token: null,
    //     playlist: null,
    //     playlistName: null,
    //     playlistTracks: []
    // }

    // handleLogin = () => {
    //     window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    // }

    // handleLogout = () => {
    //     this.setState({
    //         token: null,
    //         playlist: null,
    //         playlistName: null,
    //         playlistTracks: []
    //     })
    // }

    // handleSearch = (playlistName, playlistTracks) => {
    //     this.setState({
    //         playlistName: playlistName,
    //         playlistTracks: playlistTracks
    //     })
    // }

    // return (
    //     <div className="App">
    //         {
    //             this.state.token ? (
    //                 <div>
    //                     <button onClick={this.handleLogout}>Logout</button>
    //                     <Search token={this.state.token} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
    //                 </div>
    //             ) : (
    //                 <button onClick={this.handleLogin}>Login</button>
    //             )
    //         }
    //         <div>
    //             {
    //                 this.state.token ? (
    //                     <p>You are logged in!</p>
    //                 ) : (
    //                     <p>You are not logged in!</p>
    //                 )
    //             }
    //         </div>
    //         <div>
    //             <Search token={this.state.token} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
    //         </div>
    //     </div>
    // );

    
    // call spotify api with useEffect and useState

  const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}
            </header>
            <div className='history-music'>
              <Search token={token} />
            </div>
        </div>
    );

}

export default App;
