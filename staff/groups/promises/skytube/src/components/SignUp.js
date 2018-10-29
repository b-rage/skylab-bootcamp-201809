import React, { Component } from 'react'
import Error from './Error'

class SignUp extends Component {
    state = { name: '', surname: '', username: '', email:'', password: '', repPassword: ''}

    handleNameChange = event => {
        const name = event.target.value

        this.setState({name})
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({surname})
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({username})
    }

    handleEmailChange = event => {
        const email = event.target.value

        this.setState({email})
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({password})
    }

    handleRepPasswordChange = event => {
        const repPassword = event.target.value

        this.setState({repPassword})
    }

    handleSubmit = event =>{
        event.preventDefault()

        const {name, surname, username, email, password, repPassword} = this.state

        this.props.onSubmit(name, surname, username, email, password,repPassword)

    }

    render() {
        return <div id="register" className='signup'>
            <Error error={this.props.error} />
            <form className='form' onSubmit={this.handleSubmit}>
                <h4 className='form__label'>Name</h4>
                <input className='form__input' placeholder='Introduce your name' onChange={this.handleNameChange}/>
                <h4 className='form__label'>Surname</h4>
                <input className='form__input' placeholder='And your surname' onChange={this.handleSurnameChange}/>
                <h4 className='form__label'>Username</h4>
                <input className='form__input' placeholder='Pick a cool username' onChange={this.handleUsernameChange}/>
                <h4 className='form__label'>Email</h4>
                <input className='form__input' type='email' placeholder='notfalse@xmple.com' onChange={this.handleEmailChange}/>
                <h4 className='form__label'>Password</h4>
                <input className='form__input' type='password' placeholder='Create a secure password' onChange={this.handlePasswordChange}/>
                <h4 className='form__label'>Repeat Password</h4>
                <input className='form__input' type='password' placeholder='And repeat it' onChange={this.handleRepPasswordChange}/>
                <button className='form__button'type='submit'>Sign Up</button>
            </form>
        </div>
    }
}

export default SignUp
