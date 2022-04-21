import './login.css';
import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';  
import hero from '../../img/hero.png';
import FuncSearch from '../search/functionSearch';

function Login() {
    const CLIENT_ID = "25df50d26bab45709de59c1d44a5a4e1"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "playlist-modify-private"

    const [accessToken, setAccessToken] = useState('')

    const dispatch = useDispatch();
    
    const handleLogin = () => {
        //create function to get access token
        const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
        window.location.href = url
    }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        if(hash) {
            token = hash.split("=")[1]
            window.localStorage.setItem("token", token)
            setAccessToken(token)
            dispatch({type: "LOGIN", payload: token})
        }
        window.location.hash = ""
    }, [])


    return (
            <div className="App">
            <header className="App-header">
                { accessToken ? (
                 <FuncSearch/>
                ) : (
                    <div className='container'>
                    <div className="headcontent">
                          Bebaskan Dirimu Dengan Musik
                        <div className="content">
                            <em>Nikmati musik bebas iklan, playback offline, dan banyak lagi. Batalkan kapan saja.</em> 
                        </div>
                        <div className="button">
                          <button onClick={handleLogin} className="btn-login">Login</button>
                        </div>
                    </div>
                    <div className="marsh">
                        <img src={hero} alt="Hero Image"/>
                    </div>
                </div>
                 
                )}
            </header>
        </div>
    );

}

export default Login;
