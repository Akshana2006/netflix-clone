import React from 'react'
import netflixLogo from "./images/netflix-logo.png";
import netflixAvatar from "./images/netflix-avatar.png";
import "./Nav.css"; 

function Nav() {
  return (
    <div className="nav__logo">
        <img
            className="nav_logo"
            src={netflixLogo}
            alt="Netflix logo"
        />

    <img
        className="nav__avatar"
        src={netflixAvatar}
        alt="Netflix logo"
    />
     </div>
  )
}

export default Nav