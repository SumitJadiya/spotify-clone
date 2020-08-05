import React, { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import { useState } from 'react';
import Player from './Player';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null)

  // Run code on the based of given condition
  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ""

    const _token = hash.access_token;

    if (_token)
      setToken(_token)

    spotify.setAccessToken(_token)
    spotify.getMe().then(user => {
      console.log(user)
    })
  }, [])

  return (
    <div className="app">
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      {
        token ? (

          <Player />
        ) :
          (
            <Login />
          )
      }
    </div>
  );
}

export default App;
