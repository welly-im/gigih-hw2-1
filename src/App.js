import './App.css';
import { useState, useEffect } from 'react';
import { FuncSearch } from './components/search/functionSearch';
import { useDispatch} from 'react-redux';

function App() {
    const CLIENT_ID = "25df50d26bab45709de59c1d44a5a4e1"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"
    const SCOPE = "playlist-modify-private"

    const [token, setToken] = useState("")

    const dispatch = useDispatch();

    const handleLogin = () => {
        const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
        window.location.href = url
    }


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

        dispatch({
            type: 'LOGIN',
            payload: token
        })
    }, [dispatch])

    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
        setToken("")
        window.localStorage.removeItem("token")
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Spotify React</h1>
                {!token ?
                    <button className='btn-login'onClick={handleLogin}>
                            Login</button>
                    : 
                    <>
                        <button onClick={logout} className='btn-logout'>Logout</button>
                        <p> token now : {token}</p>
                    </>
                    
                    }
            </header>
            <div className='history-music'>
                <FuncSearch token={token} />
            </div>
        </div>
    );

}

export default App;
