import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player'
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  // push user and token into our Datalayer and console logging it
  const [{user,token}, dispatch] = useDataLayerValue();
  
  //using use effect hook which will run code when component load and based on a give condition
  useEffect(() =>{
    //when anything changes in url the below code will run and call the function getTokenFromUrl which will 
    //return hash from there we used to get the token
    const hash = getTokenFromUrl(); 

    window.location.hash = "";
    const _token = hash.access_token;
    if (_token){
      dispatch({
        type : 'SET_TOKEN',
        token : _token,
      })

      spotify.setAccessToken(_token)
      
      spotify.getMe().then(user =>{
        dispatch({
          type : 'SET_USER',
          user : user
        });
      })

      spotify.getPlaylist("6ehdSiG3d2TinBXr1r7ZK0").then(response => {
        dispatch({
          type:'SET_DISCOVER_WEEKLY',
          discover_weekly : response,
        })
      })
      


      spotify.getUserPlaylists(user?.id,{}).then((playlists) => {
        dispatch({
          type : 'SET_PLAYLISTS',
          playlists : playlists,
        })
      })
    } 
  }, []);
  
  return (
    <div className="App">
    {
      token ? (
        <Player spotify={spotify}/>
      ) : (
        <Login />
      )
    }
    </div>
  );
}

export default App;
