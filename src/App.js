import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromResponse } from './spotify';

function App() {

  // Run code on the based of given condition
  useEffect(() => {
    const hash = getTokenFromResponse()
    window.location.hash = ""
    console.log(hash)
  }, [])

  return (
    <div className="app">
      {/* Spotify Logo */}
      {/* Login with spotify button */}
      <Login />
    </div>
  );
}

export default App;
