import React from 'react'
import "./Login.css"
import { loginUrl } from "./spotify"

function Login() {
    return (
        <div className="login">
            {/* Spotify Logo */}
            {/* Login with Spotify Button */}
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <a href={loginUrl}>Login with Spotify</a>
            {/* Click to login button */}
            {/* Redirect to Spotify login page */}
            {/* Redirect to home page after logged in */}
        </div>
    )
}

export default Login
