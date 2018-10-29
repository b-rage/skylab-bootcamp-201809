import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logic from '../logic'
import $ from 'jquery'

const closeMenu = () => {
  $('.menu-btn').prop('checked', false)
}

const handleClick = (event) => {
  event.preventDefault()
}

const Navbar = (props) => {
  return (
    <header>
      <section className="navbar bg-gray">
        <div className="container">
          <div className="nav-menu">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
              <li><Link to="/" onClick={closeMenu}>Search</Link></li>
              <li><Link to="/movies/now_playing" onClick={closeMenu}>Now playing</Link></li>
              <li><Link to="/movies/trending" onClick={closeMenu}>Trending</Link></li>
              <li><Link to="/movies/popular" onClick={closeMenu}>Popular</Link></li>
            </ul>
          </div>
          <Link to="/" className="logo-div">
            <div className="logo">
              <span>SM</span>
              <span>Db</span>
            </div>
          </Link>
          <div className="options">
            {!logic.loggedIn && <div>
              <Link to="/signin">Sign In</Link> or <Link to="/login">Log In</Link>
            </div>}
            {logic.loggedIn && <div className="profile">
              <div className="dropdown">
              <a onClick={handleClick} href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img className="img-fluid" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/1809/s300/skylab-coders-academy-logo.jpg" alt="profile" /></a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to="/user">Profile</Link>
                <Link className="dropdown-item" to="/user/movies">Movies</Link>
                <div className="dropdown-divider"></div>
                <Link to="/" onClick={() => logic.logout()} className="dropdown-item">Log Out</Link>
              </div>
              </div>
            </div> }
            </div>
          </div>
        </section>
      </header>
    )
  }
  
export default Navbar