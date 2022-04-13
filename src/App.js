import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";
import { FuncSearch } from './components/search/functionSearch';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Login from './components/login/login';

function App() {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Spotify React
              </Typography>
              <Button color="inherit" href='/login'>Login</Button>
              <Button color="inherit" href='/create-playlist'>Create playlist</Button>
              <Button color="inherit" href='/'>Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
        <Router>
            <Switch>
                <Route path="/create-playlist">
                    <FuncSearch />

 </Route> 
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/">
                    <h1> HOME PAGE </h1>
                </Route>
            </Switch>
        </Router>
      </>
    );

}


export default App;

// function PrivateRoute({ children, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={() => {
//           return localStorage.getItem("token") ? (
//             children
//           ) : (
//             <Redirect to="/" />
//           );
//         }}
//       />
//     );
// }