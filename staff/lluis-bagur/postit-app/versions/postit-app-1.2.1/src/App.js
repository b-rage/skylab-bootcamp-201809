import React, { Component } from 'react'
import logic from './logic'
import Login from './components/login'
import Register from './components/register'
import Landing from './components/landing';

class App extends Component {
    state = { register: false, login: false, userId: this.getUserId(), error: null }

    getUserId() {
        const userId = sessionStorage.getItem('userId')

        return userId ? parseInt(userId) : null
    }

    handleRegister = () => {
        this.setState({ register: true })
    }

    handleLogin = () => {
        this.setState({ login: true })
    }

    handleRegisterClick = (name, surname, username, password) => {
        try {
            logic.registerUser(name, surname, username, password)
                .then(() => this.setState({ login: true, register: false, error: null }))
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLoginClick = (username, password) => {
        try {
            logic.authenticate(username, password)
                .then(userId => {
                    this.setState({ userId, login: false, register: false, error: null })

                    sessionStorage.setItem('userId', userId)
                })
                .catch(err => this.setState({ error: err.message }))
        } catch (err) {
            this.setState({ error: err.message })
        }
    }

    handleLogoutClick = () => {
        this.setState({ userId: null })

        sessionStorage.removeItem('userId')
    }

    render() {
        const { register, login, userId } = this.state
        return <div className="landingPage">

            {!register && !login && !userId && <section><h1 className="title">Post-It App </h1><button onClick={this.handleRegister}>Register</button> or <button onClick={this.handleLogin}>Login</button></section>}
            {register && <Register onRegisterClick={this.handleRegisterClick} />}
            {login && <Login onLoginClick={this.handleLoginClick} />}
            {userId && <section><button onClick={this.handleLogoutClick}>Logout</button></section>}
            {userId && <Landing userId={userId} />}
        </div>
    }
}
export default App