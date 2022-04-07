import './login.css';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import {
    BrowserRouter as Router } from "react-router-dom";

function Login() {
    const CLIENT_ID = "25df50d26bab45709de59c1d44a5a4e1"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "playlist-modify-private"

    const dispatch = useDispatch();

    const handleLogin = () => {
        const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
        window.location.href = url
    }

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (hash) {
            token = hash.split("=")[1]
            window.localStorage.setItem("token", token)
            window.location.hash = ""
        }
        dispatch({
            type: 'LOGIN',
            payload: token
        })
    }, [dispatch])

    

    return (
        <Router>
            <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                <button onClick={handleLogin} className="btn-login">Login</button>
                <br/>
            </header>
        </div>
        </Router>
       
    );

}

export default Login;