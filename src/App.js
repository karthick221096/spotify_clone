import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  //using use effect hook which will run code when component load and based on a give condition
  
  useEffect(() =>{
    //when anything changes in url the below code will run and call the function getTokenFromUrl which will 
    //return hash from there we used to get the token
    const hash = getTokenFromUrl();  
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token){
      setToken(_token)
      spotify.setAccessToken(_token)
      
      spotify.getMe().then(user =>{
        console.log('the user is ', user);
      })
    }
  }, []);

  return (
    <div className="App">
    {
      token ? (
        <Player />
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
