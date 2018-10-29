import React from 'react'
import Input from './Input'

function Login(props) {
    return <section className="login">
        <h2 className="login__title">Login to Cello</h2>
        <form className="form" onSubmit={props.onSubmit}>
            <Input name="username" />
            <Input name="password" type="password" />
            <button className="form__button">Log In</button>
            <p className="form__text">or <button className="form__link" type="button" onClick={props.onClick}>Sign Up</button></p>
        </form>
    </section>
}

export default Login;
