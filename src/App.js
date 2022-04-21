import './App.css';
import React from "react";
import Login from './components/login/login';
import logo from './img/logo.png';
import { useDispatch, useSelector } from 'react-redux';

function App() {

    const dispatch = useDispatch();
    
    const logout = () => {
        dispatch({
            type: "LOGOUT", 
            payload: ""
        })
        window.localStorage.removeItem("token")
        window.location.reload()
    }
    const token = useSelector(state => state.token.auth.token)

    return (
      <>
      <nav className="navbar">
        <ul>
            <li className="brand"><img src={logo} alt="Logo Image"/></li>
        </ul>
        <ul>{
            !token ? (
                <></>
            ) : (
                <li>
                    <button onClick={logout} className="btn-logout">Logout</button>
                </li>
        )
        }
        </ul>
        
      </nav>
              <Login />
      </>
    );

}


export default App;
