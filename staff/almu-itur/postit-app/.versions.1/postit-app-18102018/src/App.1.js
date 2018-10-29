import React, { Component } from 'react'
import Register from './components/Register'
import Login from './components/Login'
import logic from './logic'
import Home from './components/Home'


class App extends Component {
    state = { register: false, login: false, home: false }

    handleRegister = () => {
        this.setState({ register: true })
    }

    handleLogin = () => {
        this.setState({ login: true })
    }

    handleHome = () => {
        this.setState({ home: true })
    }

    handleRegisterClick = (name, surname, username, password) => {
        logic.registerUser(name, surname, username, password)
        this.setState({ login: true })
    }

    handleLoginClick = (username, password) => {
        logic.loginUser(username, password)
        //TO DO
    }

    render() {
        return <div>
            {!this.state.register && !this.state.login && !this.state.home && <section><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
            {this.state.register && <Register onRegisterClick={this.handleRegisterClick} />}
            {this.state.login && <Login onLoginClick={this.handleLoginClick} />}
            {this.state.home && <Home />}

        </div>
    }
}

export default App
