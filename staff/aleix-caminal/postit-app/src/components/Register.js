import React from 'react'
import Input from './Input'

function Register(props) {
    return <section className="register">
        <h2 className="register__title">Register to Cello</h2>
        <form className="form" onSubmit={props.onSubmit}>
            <Input name="name" />
            <Input name="username" />
            <Input name="password" type="password" />
            <Input name="confirm_password" type="password" />
            <button className="form__button">Sign Up</button>
            <p className="form__text">or <button className="form__link" type="button" onClick={props.onClick}>Log In</button></p>
        </form>
    </section>
}

export default Register;
