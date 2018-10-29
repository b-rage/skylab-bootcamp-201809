import React from 'react'
import logo from '../icon1.png'

function Landing(props) {
    return <div className="landing">
        <section className="landing__page">
        <div className="group"><img src={logo}></img><button className="landing__register-button" onClick={props.onRegisterClick}>Register</button> or <button className="landing__register-button--login" onClick={props.onLoginClick}>Login</button></div>
        </section>
    </div>
}

export default Landing