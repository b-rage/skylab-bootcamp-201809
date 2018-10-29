import React, { Component } from 'react'

class Login extends Component {
    state = { username: '', password: '' }


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

        const { username, password } = this.state

        this.props.onLoginClick(username, password)
    }

    render() {
        console.log('Post', '"render"')

        return <form onSubmit={this.handleSubmit}>
            <input className="inputDates" type="text" placeholder="Username..." onChange={this.handleUsernameChange} />
            <input className="inputDates" type="password" placeholder="password..." onChange={this.handlePasswordChange} />
            <button type="submit">Login</button>
        </form>
    }
}

export default Login