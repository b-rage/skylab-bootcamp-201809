import React from 'react'
import { Link } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'

function Navbar(props) {
    return <nav className="navbar">
        <div className="navbar__title">
            <img className="navbar__logo" src="/img/skytube.logo.png" alt="logo"></img>
            <h1>SkyTube</h1>
        </div>
        <ul className="navbar__menu">
            <li><ScrollIntoView selector="#register">
                <button className="navbar__button">Sign Up</button>
            </ScrollIntoView></li>
            <p className="navbar__separator">or</p>
            <li><Link className="navbar__button" to='/login'>Log In</Link></li>
        </ul>
    </nav>
}

export default Navbar
