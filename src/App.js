import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link } from "react-router-dom";
import { FuncSearch } from './components/search/functionSearch';
import Login from './components/login/login';
import propTypes from 'prop-types';


function App() {
    return (
        <Router>
            <Link to="/create-playlist">Create Playlist</Link>
            <br />
            <Link to="/">Login</Link>
            <Switch>
                <PrivateRoute path="/create-playlist">
                    <FuncSearch />
                </PrivateRoute>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );

}


export default App;



function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={() => {
          return localStorage.getItem("token") ? (
            children
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    );
}

PrivateRoute.propTypes = {
    children: propTypes.element.isRequired
};

