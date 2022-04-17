import './App.css';
import React  from "react";
import Login from './components/login/login';
import logo from './img/logo.png';
import { useDispatch } from 'react-redux';

function App() {

    const dispatch = useDispatch();
    
    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
        window.localStorage.removeItem("token")
    }
    
    return (
      <>
      <nav className="navbar">
        <ul>
            <li className="brand"><img src={logo} alt="Logo Image"/></li>
        </ul>
        <ul>{
            localStorage.getItem("token") ? (
                <></>
            ) : (
                <li><button onClick={logout} className="btn-logout">Logout</button>
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
