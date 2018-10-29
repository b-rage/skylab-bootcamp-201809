import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'


class App extends Component {
    state = { register: false, login: false }

    handleRegister = () => {
        this.setState({ register: true })
    }

    handleLogin = () => {
        this.setState({ login: true })
    }

    handleRegisterClick = (name, surname, username, password) => {
        logic.registerUser(name, surname, username, password)
    }

    render() {
        return <div>
            {!this.state.register && !this.state.login && <section><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
            {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
            {this.state.login && <Login />}
            {/* TODO show Home on successful login */}
        </div>
    }
}

export default App
