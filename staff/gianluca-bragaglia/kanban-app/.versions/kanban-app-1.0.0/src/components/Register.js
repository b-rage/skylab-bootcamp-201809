import React, { Component } from 'react'

class Register extends Component {
    state = { name: '', surname: '', username: '', password: '' }

    handleNameChange = event => {
        const name = event.target.value

        this.setState({ name })
    }

    handleSurnameChange = event => {
        const surname = event.target.value

        this.setState({ surname })
    }

    handleUsernameChange = event => {
        const username = event.target.value

        this.setState({ username })
    }

    handlePasswordChange = event => {
        const password = event.target.value

        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { name, surname, username, password } = this.state

        this.props.onRegister(name, surname, username, password)
    }

    render() {
        return <form className='form-register' onSubmit={this.handleSubmit}>
            <input className='input' type="text" placeholder="Name" onChange={this.handleNameChange} />
            <br></br>
            <input className='input' type="text" placeholder="Surname" onChange={this.handleSurnameChange} />
            <br></br>
            <input className='input' type="text" placeholder="Username" onChange={this.handleUsernameChange} />
            <br></br>
            <input className='input' type="password" placeholder="Password" onChange={this.handlePasswordChange} />
            <br></br>
            <button type="submit" className='btn-login2' >Register</button> 
            <br></br>
            <a href="#" className='back' onClick={this.props.onGoBack}>back</a>
        </form>
    }
}

export default Register