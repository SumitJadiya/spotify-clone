import React, { useEffect } from 'react';
import SpotifyWebApi from "spotify-web-api-js";
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';
import { useState } from 'react';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue()

  // Run code on the based of given condition
  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ""

    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        })
      })
    }
  }, [])

  return (
    <div className="app">
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      {
        token ? (

          <Player spotify={spotify} />
        ) :
          (
            <Login />
          )
      }
    </div>
  );
}

export default App;
