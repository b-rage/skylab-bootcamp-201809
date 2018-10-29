import React, { Component } from 'react'

class Login extends Component {
    state = { username: '', password: ''}

    handleNameChange = event => {
        const name = event.target.value
        this.setState({ name })
    }

    handlePasswordChange = event => {
        const password = event.target.value
        this.setState({ password })
    }

    handleSubmit = event => {
        event.preventDefault()

        const { username, password } = this.state

        this.props.onLoginClick(username, password)
    }
    
render() {
    return <form onSubmit= {this.handleSubmit}>
    <input type="text" placeholder="Username" onChange={this.handleNameChange}></input>
    <input type="password" placeholder="Password" onChange={this.handlePasswordChange}></input>
    <button type="submit">Login</button>
    </form>
    }
}

export default Login