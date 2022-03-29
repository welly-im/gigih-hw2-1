import './App.css';
import { useState, useEffect } from 'react';
import Data from './data/new-data';
import RecomMusic from './components/recomended/index';
import Search from './components/search/index';

function App() {

  const CLIENT_ID = "25df50d26bab45709de59c1d44a5a4e1"
  const REDIRECT_URI = "http://localhost:3000/"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"
  const SCOPE = "playlist-modify-private"

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

  // const DataMusic = 
  // Data.map((item) => 
  // <Playlist key={item.id} 
  // name={item.album.name} 
  // artist={item.album.artists[0].name} 
  // url={item.album.external_urls.spotify} 
  // images={item.album.images[0].url} />)

  // const Recommended = 
  // Data.filter((item) => item.album.artists[0].name !== 'Queen').map((item) => 
  // <RecomMusic key={item.id} 
  // name={item.album.name} 
  // artist={item.album.artists[0].name} 
  // url={item.album.external_urls.spotify} 
  // images={item.album.images[0].url} />)


  // return (
  //   <div className="Playlist">
  //      <h1>Made For You</h1>
  //     <div className='recommended-music'>
  //       {Recommended}
  //     </div>
  //     <h1>History</h1>
  //     <div className='history-music'>
  //       {DataMusic}
  //     </div>
  //   </div>
  // );
}

export default App;
