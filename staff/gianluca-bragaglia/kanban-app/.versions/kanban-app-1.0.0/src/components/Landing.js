import React from 'react'

function Landing(props) {
    return <div className='landing-container'>
        <button className='btn-register' onClick={props.onRegisterClick}>Register</button> <button className='btn-login' onClick={props.onLoginClick}>Login</button>
    </div>
}

export default Landing